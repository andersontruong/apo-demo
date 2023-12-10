'use client'

import * as React from 'react'
import Link from 'next/link'
import { Abril_Fatface } from 'next/font/google'
import { FaCircleUser } from 'react-icons/fa6';

const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] });

export default function UserNavbar() {
    const [mobile, setMobile] = React.useState(false);
      
    return (
      <header className={`flex w-full h-[70px] sticky top-0 items-center py-6 px-10 lg:px-20 justify-between z-50 transition ease-in-out delay-50 duration-300 bg-white shadow`}>
        <Link className="hover:text-blue-500 flex items-center space-x-2"  href="/">
          <img className="w-8" src="/Alpha_Phi_Omega.png" />
          <div className="flex flex-col items-center -space-y-2">
            <h1 className={`text-sm md:text-base font-medium transition ease-in-out delay-50 duration-300 ${abril.className}`}>
              Alpha Phi Omega
            </h1>
            <h1 className={`text-xs md:text-sm font-medium transition ease-in-out delay-50 duration-300 ${abril.className}`}>
              Chi Chapter
            </h1>
          </div>
        </Link>
        
        <div className="flex md:hidden">
            <button 
              onClick={() => { setMobile(true); }}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
        </div>
        <div className={`hidden md:flex items-center [&>*]:text-lg space-x-4 lg:space-x-10`} id="navbar-sticky">
          <Link href="/" className="mt-1 transition ease-in-out delay-50 duration-200 border-b-4 border-transparent hover:border-black">
            Calendar
          </Link>
          <Link href="/" className="mt-1 transition ease-in-out delay-50 duration-200 border-b-4 border-transparent hover:border-black">
            Links
          </Link>
          <Link href="/" className="mt-1 transition ease-in-out delay-50 duration-200 border-b-4 border-transparent hover:border-black">
            Contact Us
          </Link>
          <Link href="/home" className="transition ease-in-out delay-50 duration-200 border-b-4 border-transparent">
            <FaCircleUser className="text-3xl text-blue-400 hover:text-blue-500 hover:drop-shadow-xltransition ease-in-out delay-30 duration-200"/>
          </Link>
        </div>
      </header>
    )
  }