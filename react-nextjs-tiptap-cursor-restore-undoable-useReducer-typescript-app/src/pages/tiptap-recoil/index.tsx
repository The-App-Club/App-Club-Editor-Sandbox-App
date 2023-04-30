import { RecoilEnv, RecoilRoot } from 'recoil'

import { Demo } from '@/features/editor-recoil/components/Demo'

import type { NextPage } from 'next'

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

const TiptapRecoilPage: NextPage = () => {
  return (
    <RecoilRoot>
      <Demo />
    </RecoilRoot>
  )
}
export default TiptapRecoilPage
