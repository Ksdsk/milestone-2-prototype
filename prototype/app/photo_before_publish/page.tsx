import Image from 'next/image'
import { BiSolidEditAlt } from 'react-icons/bi'
import { BsPlusCircleFill } from 'react-icons/bs'

import Link from 'next/link'
export default function Home() {
  return (
    <main className="phone flex flex-col justify-start -z-10">
      {/* HEADER */}
      <div className='flex justify-between bg-cyan-700 p-3'>
        <div>
          <p className='text-white'>Photo App Mockup</p>
        </div>
      </div>
      {/* CONTENT */}
        <div className='h-full'>
            <div className='bg-yellow-300 h-full flex'>
                <p>"I'm a photo"</p>
            </div>
        </div>
      {/* FOOTER */}
      <div className='bg-slate-900 flex justify-around p-5'>
        <div className='flex'>
            <Link href="/edit_photo">
                <p className='text-white w-20 flex justify-center p-2 font-bold rounded-lg'>Edit</p>
            </Link>
        </div>
        <div className='flex'>
            <Link href="/home_after_upload">
                <p className='text-slate-900 w-20 flex justify-center p-2 font-bold rounded-lg bg-green-300'>Post</p>
            </Link>
        </div>
      </div>
    </main>
  )
}
