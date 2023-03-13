import { atom } from 'recoil'

export type EditorMode = 'edit' | 'preview'

type Editor = {
  text: string
  mode: EditorMode
}

const editorState = atom<Editor>({
  key: 'editor',
  // https://markdown-it.github.io/
  default: {
    text: ``,
    mode: 'edit',
  },
})

export { editorState }
