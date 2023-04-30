import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-start p-6 sm:p-24'>
      <div>
        <Link href={'/tiptap-recoil'}>tiptap-recoil</Link>
      </div>
    </main>
  )
}
