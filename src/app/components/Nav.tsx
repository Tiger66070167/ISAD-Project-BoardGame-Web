import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <div className='w-full grid grid-cols-3 justify-items py-4 bg-[#292929] text-white font-semibold fixed z-10'>
        <div className='place-content-start pl-20'>LOGO</div>
        <ul className='flex items-center justify-center space-x-6'>
            <li className='hover:text-[#5865F2] hover:scale-110 transition hover:delay-50'><Link href="/">Home</Link></li>
            <li className='hover:text-[#5865F2] hover:scale-110 transition hover:delay-50'><Link href="/booking">Booking</Link></li>
            <li className='hover:text-[#5865F2] hover:scale-110 transition hover:delay-50'><Link href="/status">Status</Link></li>
            <li className='hover:text-[#5865F2] hover:scale-110 transition hover:delay-50'><Link href="/food">Food</Link></li>
        </ul>
        <div className='px-52 justify-self-end'>
            <button className="rounded outline outline-[#5865F2] bg-[#5865F2] px-2" type='button'>Sign in</button>
        </div>
    </div>
  )
}

export default Nav