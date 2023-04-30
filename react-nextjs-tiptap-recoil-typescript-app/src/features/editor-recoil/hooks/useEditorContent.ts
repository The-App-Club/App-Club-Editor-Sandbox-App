import { useCallback, useMemo } from 'react'

// https://news.ycombinator.com/item?id=30301084
// https://github.com/ueberdosis/tiptap/blob/main/demos/src/Examples/Minimal/React/index.jsx
// https://tiptap.dev/examples/minimal

import { Blockquote } from '@tiptap/extension-blockquote'
import { Bold } from '@tiptap/extension-bold'
import { BulletList } from '@tiptap/extension-bullet-list'
import { Code } from '@tiptap/extension-code'
import { CodeBlock } from '@tiptap/extension-code-block'
import { Document } from '@tiptap/extension-document'
import { Heading } from '@tiptap/extension-heading'
import { Highlight } from '@tiptap/extension-highlight'
import { History } from '@tiptap/extension-history'
import { Italic } from '@tiptap/extension-italic'
import { ListItem } from '@tiptap/extension-list-item'
import { OrderedList } from '@tiptap/extension-ordered-list'
import { Paragraph } from '@tiptap/extension-paragraph'
import { Placeholder } from '@tiptap/extension-placeholder'
import { Strike } from '@tiptap/extension-strike'
import { TaskItem } from '@tiptap/extension-task-item'
import { TaskList } from '@tiptap/extension-task-list'
import { Text } from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import { mergeAttributes, useEditor } from '@tiptap/react'
import { UseFormSetValue } from 'react-hook-form'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { classes, Levels } from '@/features/editor-recoil/stores/command'
import { DemoForm } from '@/features/editor-recoil/stores/demoForm'
import editorContent, {
  EditorContent,
} from '@/features/editor-recoil/stores/editorContent'

const useEditorContent = (setValue?: UseFormSetValue<DemoForm>) => {
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
      Blockquote.configure({
        HTMLAttributes: {
          class: '',
        },
      }),
      ListItem.configure({
        HTMLAttributes: {
          class: '',
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: '',
        },
      }),
      CodeBlock.configure({
        languageClassPrefix: 'hoge',
        HTMLAttributes: {
          class: '',
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: '',
        },
      }),
      Bold.configure({
        HTMLAttributes: {
          class: '',
        },
      }),
      Code.configure({
        HTMLAttributes: {
          class: 'nice-code',
        },
      }),
      Italic.configure({
        HTMLAttributes: {
          class: '',
        },
      }),
      Strike.configure({
        HTMLAttributes: {
          class: '',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({
        HTMLAttributes: {
          class: '',
        },
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
        HTMLAttributes: {
          class: 'nice-task-item',
        },
      }),
      Placeholder.configure({
        placeholder: '記事を書いてください',
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: 'prose prose-base',
      },
    },
    onUpdate({ editor, transaction }) {
      setContent({ content: editor.getJSON() })
    },
    onTransaction({ editor, transaction }) {
      // https://github.com/ueberdosis/tiptap/issues/367#issuecomment-504577974
      // https://tiptap.dev/api/commands/focus
      setCursor({ cursor: transaction.selection.anchor })
      if (setValue) {
        setValue('content', editor.getJSON())
      }
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
