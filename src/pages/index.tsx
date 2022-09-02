import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <p>Home Page</p>
      <Link href={{ pathname: '/products/1' }}> show product 1</Link>
    </div>
  )
}

export default Home
