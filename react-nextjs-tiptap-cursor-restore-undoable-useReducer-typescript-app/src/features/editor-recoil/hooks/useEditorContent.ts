import { useCallback, useMemo } from 'react'

// https://news.ycombinator.com/item?id=30301084
// https://github.com/ueberdosis/tiptap/blob/main/demos/src/Examples/Minimal/React/index.jsx
// https://tiptap.dev/examples/minimal
import { Document } from '@tiptap/extension-document'
import { Heading } from '@tiptap/extension-heading'
import { History } from '@tiptap/extension-history'
import { Paragraph } from '@tiptap/extension-paragraph'
import { Text } from '@tiptap/extension-text'
import { mergeAttributes, useEditor } from '@tiptap/react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { classes, Levels } from '@/features/editor-recoil/stores/command'
import editorContent, {
  EditorContent,
} from '@/features/editor-recoil/stores/editorContent'

const useEditorContent = () => {
  const activeEditorContent = useRecoilValue(editorContent)
  const setActiveEditorConent = useSetRecoilState(editorContent)

  const { content, cursor } = useMemo(() => {
    return { ...activeEditorContent }
  }, [activeEditorContent])

  const setCursor = useCallback(
    ({ cursor }: EditorContent) => {
      setActiveEditorConent((prevState) => {
        return {
          ...prevState,
          cursor,
        }
      })
    },
    [setActiveEditorConent]
  )

  const setContent = useCallback(
    ({ content }: EditorContent) => {
      setActiveEditorConent((prevState) => {
        return {
          ...prevState,
          content,
        }
      })
    },
    [setActiveEditorConent]
  )

  // https://tiptap.dev/api/extensions/starter-kit
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      // https://github.com/ueberdosis/tiptap/discussions/2124#discussioncomment-1583523
      Heading.configure({
        levels: [1, 2, 3],
      }).extend({
        renderHTML({ node, HTMLAttributes }) {
          const hasLevel = this.options.levels.includes(node.attrs.level)
          const level: Levels = hasLevel
            ? node.attrs.level
            : this.options.levels[0]

          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
              class: `${classes[level]}`,
            }),
            0,
          ]
        },
      }),
      History.configure({
        depth: 10,
      }),
    ],
    content,
    onUpdate({ editor, transaction }) {
      setContent({ content: editor.getJSON() })
    },
    onTransaction({ editor, transaction }) {
      // https://github.com/ueberdosis/tiptap/issues/367#issuecomment-504577974
      // https://tiptap.dev/api/commands/focus
      setCursor({ cursor: transaction.selection.anchor })
    },
  })

  return useMemo(() => {
    return {
      editor,
      content,
      cursor,
      setContent,
      setCursor,
    }
  }, [editor, content, cursor, setContent, setCursor])
}

export default useEditorContent
