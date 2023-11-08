import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsPlusCircleFill } from 'react-icons/bs'
import Link from 'next/link'
export default function PhotosAfterPlusClicked() {
  return (
    <main className="phone flex flex-col justify-start -z-10">
      {/* HEADER */}
      <div className='flex justify-between bg-cyan-700 p-3'>
        <div>
          <p className='text-white'>Photo App Mockup</p>
        </div>
      </div>
      {/* CONTENT */}
      <div>
        <div className='grid grid-cols-3 grid-flow-row h-full'>
          <Link href="photo_before_publish" className='bg-yellow-300 h-36 flex'>
            <p>"I'm a photo"</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
