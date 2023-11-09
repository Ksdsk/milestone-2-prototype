import Image from 'next/image'
import { AiFillMessage } from 'react-icons/ai'
import { BsPlusCircleFill } from 'react-icons/bs'
import { RiSendPlaneFill, RiCameraLine } from 'react-icons/ri'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="phone flex flex-col justify-start">
      {/* HEADER */}
      <div className='flex justify-between bg-cyan-700 p-3'>
        <div>
          <p className='text-white'>Messages</p>
        </div>
        <Link href="/messages">
            <p className='text-white'>Back</p>
        </Link>
      </div>
      {/* CONTENT */}
      <div className='h-full pt-5 px-5 flex flex-col'>
        <Link href="/dm">
            <div className='bg-slate-100 flex justify-start p-4 gap-3 '>
                <div>
                    <div className='p-4 rounded-full bg-cyan-400 border-2 border-slate-900'></div>
                </div>
                <div className='flex flex-col justify-around'>
                    <p className='text-xs'>Username</p>
                </div>
            </div>
        </Link>
        <div className='flex flex-col gap-3 mt-3'>
            <div className='flex justify-start'>
                <p className='bg-slate-200 rounded-e-full rounded-tl-full p-3'>Lol yeah</p>
            </div>
            <div className='flex justify-end'>
                <p className='text-white bg-blue-600 rounded-s-full rounded-tr-full p-3'>Lol yeah</p>
            </div>
        </div>
      </div>
        {/* FOOTER */}
        <div className='p-5 w-full flex justify-between gap-2'>
            <div className='w-full bg-slate-200 rounded-full px-2 flex justify-between'>
                <p className='text-black p-2'>Yeah lol that's insane</p>
            </div>
            <Link href="" className='flex flex-col justify-center bg-blue-600 rounded-full'>
                <RiCameraLine size="20px" className="m-2" color="white"/>
            </Link>
            <Link href="" className='flex flex-col justify-center bg-blue-600 rounded-full'>
                <RiSendPlaneFill size="20px" className="m-2" color="white"/>
            </Link>
        </div>
    </main>
  )
}
