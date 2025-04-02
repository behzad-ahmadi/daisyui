import ThemeSwitcher from '@/app/Components/ThemeSwitcher'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <nav className='bg-gray-600 text-primary-content p-4 flex justify-between'>
        <h1 className='text-2xl font-bold underline decoration-amber-300'>
          daisyUI
        </h1>
        <div className='flex gap-x-4'>
          <ThemeSwitcher />

          <Link href='/' className='hover:text-base-100'>
            Home
          </Link>

          <Link href='/search' className='hover:text-base-100'>
            Search
          </Link>
        </div>
      </nav>

      <button className='btn bg-primary'>TEST</button>
    </div>
  )
}

export default Home
