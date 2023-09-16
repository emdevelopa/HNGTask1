import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full items-center justify-center align-middle'>
        <div className="flex m-auto gap-8 justify-center items-center p-4">
            <a href='#' >
                <Image src='facebook-square.svg' alt='fb' width={30} height={30} />
                </a>
            <a href='#' >
                <Image src='instagram.svg' alt='fb' width={30} height={30} />
                </a>
            <a href='#' >
                <Image src='twitter.svg' alt='fb' width={30} height={30} />
                </a>
            <a href='#' >
            
                <Image src='youtube.svg' alt='fb' width={30} height={30} />
                </a>
        </div>

        <div className="flex justify-center items-center p-3 gap-8">
            <a href='#'>
                Conditions of Use
            </a>
            <a href='#'>
                Privacy & Policy
            </a>
            <a href='#'>
                Press Room
            </a>
        </div>

        <div className="flex justify-center items-center text-[#6B7280] p-2 ">&copy;Moviebox by EMWRLD</div>
    </div>
  )
}

export default Footer