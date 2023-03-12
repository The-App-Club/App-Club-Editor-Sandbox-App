import { lazy } from 'react'

import { NextPage } from 'next'

const Markdown = lazy(() => import('@/features/markdown/components/Markdown'))

const MarkdownPage: NextPage = () => {
  return <Markdown />
}

export default MarkdownPage
