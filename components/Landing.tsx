import React from 'react'
import laptop from "../assets/laptop.png"
import phone from "../assets/phone.png"
import bulb from "../assets/bulb.png"
import mouse from "../assets/mouse.png"
import pc from "../assets/pc.png"
import Image from 'next/image'
import Link from 'next/link'

const Landing = () => {
  return (
    <div className='relative text-center h-[76vh] mt-8 flex text-white flex-col justify-center z-10 items-center'>
      <div className=''>
        <div className='group relative'>
          <span
            className='text-6xl md:text-8xl text-transparent bg-clip-text font-extrabold bg-gradient-to-b from-[#C385F1] to-[#7A91D6]'
          >
            WEB3DOT
          </span>
          {/* <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" /> */}
        </div>
      </div>
      <p className='text-3xl my-16'>Connecting dots in Web3</p>
      <Link href='/' className='z-10 transform transition duration-500 hover:scale-125 h-12 flex border border-[#016BF0] rounded-lg items-center w-32 justify-center'>
        Register now
      </Link>
      <Image src={laptop} alt="laptop" className="absolute top-4 left-0 h-36 md:h-44 -z-10"  />
      <Image src={phone} alt="laptop" className="absolute bottom-4 left-0 h-36 md:h-44 -z-10"  />
      <Image src={bulb} alt="laptop" className="absolute top-4 right-0 h-36 md:h-44 -z-10"  />
      <Image src={mouse} alt="laptop" className="absolute mid-0 right-0 h-24 md:h-28 -z-10"  />
      <Image src={pc} alt="laptop" className="absolute bottom-4 right-0 h-36 md:h-44 -z-10"  />
    </div>
  )
}

export default Landing
