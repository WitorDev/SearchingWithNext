import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='bg-blue-600 p-2 mx-auto'>
      <ul className='flex max-w-screen-xl mx-auto gap-2 text-white font-bold'>
        <Link href="/">Home</Link>
        <Link href="/list">List</Link>
      </ul>
    </div>
  )
}
