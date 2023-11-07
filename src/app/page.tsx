'use client'

import { Abril_Fatface, Noto_Serif } from 'next/font/google'
import Link from 'next/link'
import { FaGraduationCap, FaHeart, FaEnvira, FaQuoteRight, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'
import * as React from 'react'

const noto = Noto_Serif({ weight: '500', subsets: ['latin'] });
const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] });

function Navbar() {
  const [shadow, setShadow] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setShadow(position > 150);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
    
  return (
    <header className={`flex w-full sticky top-0 items-center py-8 px-10 lg:px-20 xl:px-48 justify-between z-50 transition ease-in-out delay-50 duration-300 bg-white ${shadow ? 'shadow-xl' : ''}`}>
      <Link className="hover:text-blue-500 flex items-center space-x-2"  href="/">
        <img className="w-8" src="/Alpha_Phi_Omega.png" />
        <div className="flex flex-col items-center -space-y-2">
          <h1 className={`text-xl font-medium transition ease-in-out delay-50 duration-300 ${abril.className}`}>
            Alpha Phi Omega
          </h1>
          <h1 className={`text-base font-medium transition ease-in-out delay-50 duration-300 ${abril.className}`}>
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
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
      </div>
      <div className={`hidden md:flex items-center [&>*]:text-xl space-x-4 lg:space-x-10`} id="navbar-sticky">
        <Link href="/" className="transition ease-in-out delay-50 duration-200 border-b-4 border-transparent hover:border-black">
          About Us
        </Link>
        <Link href="/" className="transition ease-in-out delay-50 duration-200 border-b-4 border-transparent hover:border-black">
          Rush
        </Link>
        <Link href="/" className="transition ease-in-out delay-50 duration-200 border-b-4 border-transparent hover:border-black">
          Contact Us
        </Link>
        <Link href="/" className="text-white p-3 bg-blue-300 rounded-2xl hover:bg-blue-600 transition ease-in-out delay-50 duration-200">
          Login
        </Link>
      </div>
    </header>
  )
}

function ValueCard({ Icon, title, desc, iconColor, underlineColor }: { Icon: any, title: string, desc: string, iconColor?: string, underlineColor?: string}) {

  return (
    <div className="flex flex-col items-center text-center space-y-5 group">
      <Icon className={`text-6xl text-white transition ease-in-out delay-50 duration-300 lg:group-hover:drop-shadow-2xl group-hover:scale-125 ${iconColor}`}/>
      <h1 className={`text-2xl lg:text-4xl text-white transition ease-in-out delay-50 duration-300 border-b-8 border-transparent drop-shadow-2xl ${underlineColor}`}>
        {title}
      </h1>
      <p className="text-lg lg:text-2xl text-white drop-shadow-xl">
        {desc}
      </p>
    </div>
  )
}

function PhotoCard({ src, text, reverse=false, className='' }: { src: string, text: string, reverse?: boolean, className?: string}) {
  return (
    <div className={`flex flex-col space-y-10 lg:space-y-0 justify-center items-center lg:space-x-28 group ${reverse ? "lg:flex-row-reverse lg:space-x-reverse" : "lg:flex-row"} ${className}`}>
      <h1 className="text-center lg:text-start text-4xl group-hover:before:scale-x-100 group-hover:before:origin-left relative before:w-full before:h-2 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#4774C2] before:absolute before:left-0 before:-bottom-1">
        {text}
      </h1>
      <div className={`bg-white p-2 lg:p-4 shrink w-full md:w-3/5 xl:w-2/5 peer ${reverse ? "shadow-[24px_24px_50px_1px_rgba(0,0,0,0.25)]" : "shadow-[-24px_24px_50px_1px_rgba(0,0,0,0.25)]"} rounded-2xl group-hover:scale-110 group-hover:z-40 z-0 transition ease-in-out delay-50 duration-300`}>
        <img src={src} className="rounded-xl"/>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <Navbar/>
      <div className="flex flex-col items-center w-full min-h-screen">
        <div className="lg:bg-fixed bg-center bg-cover w-full h-[80vh] shadow-xl flex items-center justify-center" style={{ backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url("/photos/3H-UCLA-Tour.jpg")', backgroundRepeat: 'no-repeat'}}>
          <div className="flex flex-col lg:w-3/4 xl:w-2/3 lg:p-20 items-center justify-center space-y-5 rounded-3x text-center">
            <h1 className={`text-5xl lg:text-6xl text-white drop-shadow-2xl ${abril.className}`}>
              Alpha Phi Omega
            </h1>
            <h1 className={`text-2xl lg:text-3xl text-white drop-shadow-2xl`}>
              Community Service-Based Fraternity at UCLA
            </h1>
          </div>
        </div>
        <div className="w-full relative bottom-20 md:bottom-32 xl:bottom-56 z-0 -mb-[200px] xl:-mb-[300px]">
          <img className="h-full w-full" src="/wave_top.svg"/>
          <div className="flex flex-col items-center p-10 lg:p-20 xl:px-40 bg-[#99B2DD] space-y-10 lg:space-y-24">
            <h1 className={`text-center text-4xl lg:text-6xl drop-shadow-xl text-white ${abril.className}`}>
              OUR VALUES
            </h1>
            <div className="flex flex-col xl:flex-row items-center justify-around space-y-20 xl:space-y-0 xl:[&>*]:w-1/4">
              <ValueCard 
                Icon={FaGraduationCap} 
                title="Leadership" 
                desc="Provide leadership workshops and events to help brothers become better leaders of the chapter and of the world."
                iconColor="group-hover:text-blue-600"
                underlineColor="group-hover:border-blue-600"
              />
              
              <ValueCard 
                Icon={FaHeart} 
                title="Friendship" 
                desc="Develop brotherhood through shared experiences and an understanding of one another."
                iconColor="group-hover:text-red-500"
                underlineColor="group-hover:border-red-500"
              />
              <ValueCard 
                Icon={FaEnvira} 
                title="Service" 
                desc="Offer various opportunities to participate in types of service you are passionate about."
                iconColor="group-hover:text-green-700"
                underlineColor="group-hover:border-green-700"
              />
            </div>
          </div>
          <img src="/wave_bottom.svg"/>
        </div>
        <div className="flex flex-col pt-48 pb-20 xl:py-30 p-10 space-y-16">
          <PhotoCard text="Be a Leader." src="/photos/DSC_0822.jpg"/>
          <PhotoCard text="Be a Friend." src="/photos/DSC_0566.jpg" reverse/>
          <PhotoCard text="Be of Service." src="/photos/Image-10-15-23-at-12.47-AM-768x526.jpg"/>
        </div>
        <div className="lg:bg-fixed bg-center bg-cover w-full h-[80vh] shadow-xl flex items-center justify-center" style={{ backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url("/photos/16112631_10209655996450121_3350485954191932056_o.jpg")', backgroundRepeat: 'no-repeat'}}>
          <div className="flex flex-col justify-center items-center p-10 lg:p-20 min-h-full lg:min-h-0 bg-black bg-opacity-50 lg:rounded-2xl space-y-5 text-center">
            <FaQuoteRight className="text-4xl text-white"/>
            <p className="text-2xl text-white">
              We cannot build our own future without helping others build theirs.
            </p>
            <div className="space-y-2">
              <h1 className={`text-3xl text-white ${abril.className}`}>
                William “Bill” Clinton
              </h1>
              <p className='text-2xl text-white'>
                Mu Alpha '67 Past President of the United States of America
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center xl:space-x-10 py-20 w-full px-10 xl:px-0 xl:w-4/5 2xl:w-3/5 space-y-10">
          <h1 className="text-4xl text-center">
            Message From Our President
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-10">
            <div className="space-y-4 lg:space-y-10 md:w-4/5 xl:w-3/5">
              <h1 className="text-lg lg:text-xl">
                Alpha Phi Omega's Chi Chapter at UCLA welcomes anyone and everyone who is interested in participating in community service. Through our chapter events and programs, we aim to create conscientious leaders, develop impactful friendships, and contribute meaningful service to various communities and causes. Our hope is that our members can grow professionally and introspectively as a result of their time in our fraternity, and that they carry the lessons they learn here as they find their place in the world. Our Executive Committee is excited to welcome you this term and thanks you for your interest in the Chi Chapter of APO. We hope to see you at future events!
              </h1>
              <h1 className="text-lg lg:text-xl text-center lg:text-start">
                - Zeriel Wong, President | Fall 2023
              </h1>
            </div>
            <img className="w-4/5 md:w-3/5 xl:w-2/5" src="/photos/Screen-Shot-2023-10-15-at-12.40.50-AM.png" />
          </div>
        </div>
      </div>

      <footer className="py-10">
        <div className="flex flex-col items-center text-center space-y-10 pt-10 pb-16">
          <h1 className="text-4xl">
            Follow Us
          </h1>
          <div className="flex justify-center space-x-10">
            <div className="rounded-full bg-blue-100 p-3 drop-shadow-lg">
              <FaFacebookF className="text-4xl text-blue-600"/>
            </div>
            <div className="rounded-full bg-blue-100 p-3 drop-shadow-lg">
              <FaInstagram className="text-4xl text-orange-600"/>
            </div>
            <div className="rounded-full bg-blue-100 p-3 drop-shadow-lg">
              <FaYoutube className="text-4xl text-red-600"/>
            </div>
          </div>
        </div>
        <p className="px-10 text-center text-lg xl:text-xl">
            © All Copyright Reserved | Alpha Phi Omega - University of California, Los Angeles
          </p>
      </footer>
    </main>
  )
}
