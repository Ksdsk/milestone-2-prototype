import Image from 'next/image'
import { LuType } from 'react-icons/lu'
import { PiStickerFill } from 'react-icons/pi'
import { MdOutlineGif } from 'react-icons/md'
import { BsPlusCircleFill } from 'react-icons/bs'
import { FaCircle } from 'react-icons/fa'

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
        <div className='h-full flex justify-between bg-yellow-300'>
            <div className='h-full flex'>
                <p>"I'm a photo"</p>
            </div>
            <div className='flex flex-col bg-slate-700/75 h-fit p-3 rounded-lg m-4 gap-6'>
                <LuType size="25px" color="#FFFFFF"/>
                <PiStickerFill size="25px" color="#FFFFFF"/>
                <MdOutlineGif size="25px" color="#FFFFFF"/>
                <FaCircle size="25px" color="#FFFFFF"/>
                <FaCircle size="25px" color="#FFFFFF"/>
                <FaCircle size="25px" color="#FFFFFF"/>
            </div>
        </div>
      {/* FOOTER */}
      <div className='bg-slate-900 flex justify-around p-5'>
        <div className='flex'>
            <Link href="/photo_before_publish">
                <p className='text-white w-20 flex justify-center p-2 font-bold rounded-lg'>Done</p>
            </Link>
        </div>
      </div>
    </main>
  )
}
