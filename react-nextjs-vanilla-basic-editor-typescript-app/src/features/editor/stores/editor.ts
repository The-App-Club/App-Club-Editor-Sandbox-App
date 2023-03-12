import { atom } from 'recoil'

type Editor = {
  text: string
}

const editorState = atom<Editor>({
  key: 'editor',
  // https://markdown-it.github.io/
  default: {
    text: ``,
  },
})

export { editorState }
