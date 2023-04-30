import { Demo } from '@/features/editor-provider/components/Demo'
import { EditorProvider } from '@/features/editor-provider/components/EditorProvider'

import type { NextPage } from 'next'

const TiptapRecoilPage: NextPage = () => {
  return (
    <EditorProvider>
      <Demo />
    </EditorProvider>
  )
}
export default TiptapRecoilPage
