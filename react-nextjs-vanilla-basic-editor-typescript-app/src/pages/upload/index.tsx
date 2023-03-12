import { lazy } from 'react'

import { NextPage } from 'next'

const Upload = lazy(() => import('@/features/upload/components/Upload'))

const UploadPage: NextPage = () => {
  return <Upload />
}

export default UploadPage
