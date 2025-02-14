import React from 'react'
import Link from 'next/link'

export default function Card({ id, title, paragraph }) {
  return (
    <Link href={`/product/${id}`}>
    <div className='flex flex-col gap-2 border-2 border-slate-200 rounded-lg p-2 text-black bg-white hover:-translate-y-2 transition-all hover:shadow-xl'>
        <h1>{title}</h1>
        <p>{paragraph}</p>
    </div>
    </Link>
  )
}