import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="relative aspect-[16/3] bg-[#232323] px-20 pt-5 ">
        <div className='grid grid-cols-3 gap-x-2'>

            {/* Left */}
            <div className='laptop:text-2xl desktop:text-3xl font-bold text-[#5865F2]'>
                LOGO
                <div className='laptop:text-base desktop:text-2xl font-normal text-[#ffffff]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, cum nobis! Maiores, dolores tempore consequuntur corporis est nemo voluptas consequatur harum pariatur assumenda recusandae cupiditate eligendi sit autem, numquam doloribus.
                </div>
            </div>

            {/* Center */}
            <div className='laptop:text-2xl desktop:text-3xl font-bold text-[#5865F2]'>Board Game Cafe
                <div className='laptop:text-base desktop:text-2xl  font-normal text-[#ffffff] hover:text-[#5865F2] transition hover:delay-50'>
                    <Link href="/booking">Booking</Link>
                </div>
                <div className='laptop:text-base desktop:text-2xl  font-normal text-[#ffffff] hover:text-[#5865F2] transition hover:delay-50'>
                    <Link href="/status">Status</Link>
                </div>
                <div className='laptop:text-base desktop:text-2xl  font-normal text-[#ffffff] hover:text-[#5865F2] transition hover:delay-50'>
                    <Link href="/food">Food</Link>
                </div>
            </div>

            {/* Right */}
            <div className='laptop:text-2xl desktop:text-3xl font-bold text-[#5865F2]'>Contact
                <div className='laptop:text-base desktop:text-2xl  font-normal text-[#ffffff]'>
                    LINE :
                </div>
                <div className='laptop:text-base desktop:text-2xl  font-normal text-[#ffffff]'>
                    IG :
                </div>
                <div className='laptop:text-base desktop:text-2xl  font-normal text-[#ffffff]'>
                    Email :
                </div>
            </div>
        </div>

        {/* Bottom left */}
        <div className='absolute bottom-2 laptop:text-sm desktop:text-base '>Copyright © 2024-2024 Skibidi All Rights Reserved. | Produced by LnwWinZa0072547</div>
    </footer>
  )
}

export default Footer