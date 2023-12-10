'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Abril_Fatface } from 'next/font/google'
import PopupModal from './PopupModal';
import { FaBars } from 'react-icons/fa6';

const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] });

export default function Navbar() {
    const [shadow, setShadow] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [loginEnabled, setLoginEnabled] = useState(false);
  
    const handleScroll = () => {
      const position = window.scrollY;
      setShadow(position > 150);
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);
      
    return (
    <>
    <header className={`flex w-full h-[80px] sticky top-0 items-center py-6 px-10 lg:px-20  justify-between z-10 transition ease-in-out delay-50 duration-300 bg-white ${shadow ? 'shadow-xl' : ''}`}>
        <Link className="group flex items-center space-x-2"  href="/">
          <img className="w-8" src="/Alpha_Phi_Omega.png" />
          <div className="flex flex-col items-center -space-y-2">
            <h1 className={`drop-shadow-xl text-sm md:text-lg text-blue-800 font-medium transition ease-in-out delay-50 duration-300 group-hover:text-blue-300 ${abril.className}`}>
              Alpha Phi Omega
            </h1>
            <h1 className={`drop-shadow-xl text-xs md:text-base text-yellow-700 font-medium transition ease-in-out delay-50 duration-300 group-hover:text-yellow-500 ${abril.className}`}>
              Chi Chapter
            </h1>
          </div>
        </Link>
        
        <div className="flex md:hidden">
            <button 
              onClick={() => { setMobile(true); }}>
              <FaBars />
            </button>
        </div>
        <div className={`hidden md:flex items-center [&>*]:text-lg space-x-4 lg:space-x-10`} id="navbar-sticky">
          <Link href="/" className="mt-1 transition ease-in-out delay-50 duration-200 border-b-2 border-transparent hover:border-black">
            About Us
          </Link>
          <Link href="/" className="mt-1 transition ease-in-out delay-50 duration-200 border-b-2 border-transparent hover:border-black">
            Rush
          </Link>
          <Link href="/" className="mt-1 transition ease-in-out delay-50 duration-200 border-b-2 border-transparent hover:border-black">
            Contact Us
          </Link>
          <button onClick={() => {setLoginEnabled(!loginEnabled)}} className="hover:text-white px-8 py-2 bg-blue-100 rounded-md hover:bg-blue-600 transition ease-in-out delay-50 duration-200">
            Login
          </button>
        </div>
      </header>
      <PopupModal 
          enabled={loginEnabled}
          setLoginEnabled={setLoginEnabled}
          className="top-1/4 bg-white w-1/4 h-[50vh] rounded-xl p-4 drop-shadow-2xl"
      >
        <div className="relative flex w-full h-full flex-col items-center space-y-2">
          <img className="w-16" src="/Alpha_Phi_Omega.png" />
          <h1 className="text-2xl">Welcome back!</h1>
          <form className="w-full" onSubmit={(e) => { e.preventDefault(); }}>
              <div className="flex flex-col items-center w-full space-y-4 my-4">
                <div className="flex flex-col">
                  <label>Username</label>
                  <input className="p-2 rounded-lg border-2 border-neutral-200 bg-neutral-100 shadow-md focus:outline-none focus:shadow-lg" type="text"/>
                </div>
                <div className="flex flex-col">
                  <label>Password</label>
                  <input className="p-2 rounded-lg border-2 border-neutral-200 bg-neutral-100 shadow-md focus:outline-none focus:shadow-lg" type="password"/>
                </div>
                <button type="submit" className="absolute bottom-5 rounded-full px-8 py-2 bg-blue-200 hover:bg-blue-300 drop-shadow-xl transition ease-in-out delay-50 duration-200">
                  <h1 className="text-xl">
                    Login
                  </h1>
                </button>
              </div>
              
          </form>
        </div>
      </PopupModal>
    </>
      
    )
  }