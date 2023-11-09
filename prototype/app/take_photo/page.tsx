import Image from 'next/image'
import { FaImage, FaMagic } from 'react-icons/fa'
import { BsCircle } from 'react-icons/bs'

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
      <div className='bg-black flex justify-around p-5'>
        <div className='top-4 relative'>
            <Link href="/photos_after_plus_clicked">
                <FaImage size="25px" color="#FFFFFF"/>
            </Link>
        </div>
        <div className='flex'>
            <Link href="/photo_before_publish">
                <BsCircle size="50px" color="#FFFFFF"/>
            </Link>
        </div>
        <div className='top-4 relative'>
            <Link href="/filtering" >
                <FaMagic size="25px" color="#FFFFFF"/>
            </Link>
        </div>
      </div>
    </main>
  )
}
