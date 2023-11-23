import Image from 'next/image'
import { AiFillMessage } from 'react-icons/ai'
import { BsPlusCircleFill } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="phone flex flex-col justify-start">
      {/* HEADER */}
      <div className='flex justify-between bg-cyan-700 p-3'>
        <div>
          <p className='text-white'>Messages</p>
        </div>
        <Link href="/">
            <p className='text-white'>Back</p>
        </Link>
      </div>
      {/* CONTENT */}
      <div className='h-full pt-5 px-5 flex flex-col'>
        <Link href="/dm">
            <div className='bg-slate-100 flex justify-start p-4 gap-3 border border-b-black'>
                <div>
                    <div className='h-12 w-12 rounded-full bg-cyan-400 border-2 border-slate-900'></div>
                </div>
                <div className='flex flex-col justify-between'>
                    <p className='text-xs'>Username</p>
                    <p className='text-md'>Last sent message</p>
                </div>
            </div>
        </Link>

        <div className='border border-b-black bg-slate-100 flex justify-start p-4 gap-3'>
            <div>
                <div className=' border-b-black h-12 w-12 rounded-full bg-violet-400 border-2 border-slate-900'></div>
            </div>
            <div className='flex flex-col justify-between'>
                <p className='text-xs'>Username</p>
                <p className='text-md'>Last sent message</p>
            </div>
        </div>
        <div className='border border-b-black bg-slate-100 flex justify-start p-4 gap-3'>
            <div>
                <div className='h-12 w-12 rounded-full bg-orange-400 border-2 border-slate-900'></div>
            </div>
            <div className='flex flex-col justify-between'>
                <p className='text-xs'>Username</p>
                <p className='text-md'>Last sent message</p>
            </div>
        </div>
        <div className='bg-slate-100 flex justify-start p-4 gap-3'>
            <div>
                <div className='h-12 w-12 rounded-full bg-teal-400 border-2 border-slate-900'></div>
            </div>
            <div className='flex flex-col justify-between'>
                <p className='text-xs'>Username</p>
                <p className='text-md'>Last sent message</p>
            </div>
        </div>
      </div>
    </main>
  )
}
