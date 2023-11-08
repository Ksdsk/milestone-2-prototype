import Image from 'next/image'
import { AiFillMessage } from 'react-icons/ai'
import { BsPlusCircleFill } from 'react-icons/bs'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="phone flex flex-col justify-start">
      {/* HEADER */}
      <div className='flex justify-between bg-cyan-700 p-3'>
        <div>
          <p className='text-white'>Photo App Mockup</p>
        </div>
        <div>
          <AiFillMessage color={"#FFFFFF"} size={"30px"}/>
        </div>
      </div>
      {/* CONTENT */}
      <div className='h-full pt-5 px-5 gap-5 flex flex-col'>
        <div className='bg-yellow-300 h-2/4'>
        </div>
        <div className='bg-cyan-300 h-2/4'>
        </div>
      </div>
      {/* FOOTER */}
      <div className='bg-slate-900 flex justify-around p-3'>
        <div>
          <Link href="/photos_after_plus_clicked">
            <BsPlusCircleFill color={"#FFFFFF"} size={"50px"}/>
          </Link>
        </div>
      </div>
    </main>
  )
}
