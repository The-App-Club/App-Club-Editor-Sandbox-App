import { atom } from 'recoil'

import type { Content } from '@tiptap/react'

export type EditorContent = {
  content?: Content
  cursor?: number
}

const editorContent = atom<EditorContent>({
  key: 'editorContent',
  default: {
    content: {
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
    },
    cursor: 0,
  },
})

export default editorContent
