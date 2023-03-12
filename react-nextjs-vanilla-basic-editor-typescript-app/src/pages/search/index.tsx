import { useRouter } from 'next/router'

import { NextPage } from 'next'

import ShowMe from '@/features/search/components/ShowMe'
import { SearchQueryParamsSchema } from '@/features/search/domains/searchQueryParams'
import { useTypedRouter } from '@/features/search/hooks/useTypedRouter'
import SearchLayout from '@/features/search/layouts/default'

const SearchPage: NextPage = () => {
  const { query } = useRouter()
  console.log(`[SearchPage]raw`, query)
  const result = useTypedRouter(SearchQueryParamsSchema)
  if (result.isErr()) {
    return (
      <SearchLayout>
        <p>Something went wrong...</p>
      </SearchLayout>
    )
  }
  const router = result.value
  console.log(`[SearchPage]parsed`, router.query)
  return (
    <SearchLayout>
      <ShowMe data={router.query} />
    </SearchLayout>
  )
}

export default SearchPage
