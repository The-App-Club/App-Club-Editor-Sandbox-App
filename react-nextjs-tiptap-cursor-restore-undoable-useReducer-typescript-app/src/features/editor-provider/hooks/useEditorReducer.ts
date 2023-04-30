import { createContext, useCallback, useContext, useMemo } from 'react'

import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import History from '@tiptap/extension-history'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { Transaction } from '@tiptap/pm/state'
import { mergeAttributes, useEditor } from '@tiptap/react'
import { Editor } from '@tiptap/react'
import { Simplify } from 'type-fest'
import useUndo, { State } from 'use-undo'

import { classes, Levels } from '@/features/editor-provider/stores/command'

type EditorState = {
  editor: Editor | null
  transaction: Transaction | null
  cursor: number
}

type UndoableEditorState = Simplify<State<EditorState>>

const initialContent = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [{ type: 'text', text: 'こんにちわ。世界。' }],
    },
    {
      type: 'paragraph',
      content: [{ type: 'text', text: 'Hello World.' }],
    },
    {
      type: 'paragraph',
    },
    {
      type: 'paragraph',
      content: [{ type: 'text', text: 'こんにちわ。Cowboy Bebop' }],
    },
  ],
}

const initialState: EditorState = {
  editor: null,
  transaction: null,
  cursor: 0,
}

export const useEditorReducer = () => {
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
    content: initialContent,
    onUpdate({ editor, transaction }) {
      // @ts-ignore
      set({ editor, transaction })
    },
    onTransaction({ editor, transaction }) {
      // https://github.com/ueberdosis/tiptap/issues/367#issuecomment-504577974
      // https://tiptap.dev/api/commands/focus
      // @ts-ignore
      set({ editor, transaction, cursor: transaction.selection.anchor })
    },
  })

  const [operationState, { set, reset, undo, redo, canUndo, canRedo }] =
    useUndo<EditorState>({
      ...initialState,
      editor,
    })

  const { present } = operationState

  const doReset = useCallback(() => {
    reset(initialState)
  }, [reset])

  return useMemo(() => {
    return {
      operationState,
      doReset,
      undo,
      redo,
      canUndo,
      canRedo,
    }
  }, [operationState, doReset, undo, redo, canUndo, canRedo])
}

export const defaultEditor: ReturnType<typeof useEditorReducer> = {
  operationState: {
    past: [],
    present: initialState,
    future: [],
  },
  doReset: () => {},
  undo: () => {},
  redo: () => {},
  canUndo: false,
  canRedo: false,
}

export const EditorContext = createContext(defaultEditor)

const useTipTapEditor = () => {
  const { operationState, doReset, undo, redo, canUndo, canRedo } =
    useContext(EditorContext)
  return {
    operationState,
    doReset,
    undo,
    redo,
    canUndo,
    canRedo,
  }
}

export default useTipTapEditor
