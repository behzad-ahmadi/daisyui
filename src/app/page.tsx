import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <nav className='bg-primary text-primary-content p-4 flex justify-between'>
        <h1 className='text-2xl font-bold text underline decoration-amber-300'>
          Daisyui
        </h1>
        <div className='flex gap-x-4'>
          <Link href='/' className='hover:text-base-100'>
            Home
          </Link>
          <Link href='/search' className='hover:text-base-100'>
            Search
          </Link>
        </div>
      </nav>
    </div>
  )
}
