'use client'


import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <>
    <h1 className='text-center text-4xl'>Ini Halaman Settings</h1>
    <div className='text-center'>
        <button className='w-20 h-10 border-1 bg-purple-100 rounded-full'>
          <Link href={'/'} >Home</Link>
        </button>
    </div>
    </>
  )
}

export default page