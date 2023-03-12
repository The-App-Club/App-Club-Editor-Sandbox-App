import { lazy } from 'react'

import { NextPage } from 'next'

const Editor = lazy(() => import('@/features/editor/components/Editor'))

const EditorPage: NextPage = () => {
  return <Editor />
}

export default EditorPage
