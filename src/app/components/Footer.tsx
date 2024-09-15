import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="relative aspect-[16/3] bg-[#232323] px-20 pt-5 ">
        <div className='grid grid-cols-3 gap-x-2'>
            <div className='text-2xl font-bold text-[#5865F2]'>LOGO
                <div className='text-base font-normal text-[#ffffff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, cum nobis! Maiores, dolores tempore consequuntur corporis est nemo voluptas consequatur harum pariatur assumenda recusandae cupiditate eligendi sit autem, numquam doloribus.</div>
            </div>
            <div className='text-2xl font-bold text-[#5865F2]'>Board Game Cafe
                <div className='text-base font-normal text-[#ffffff] hover:text-[#5865F2] transition hover:delay-50'><Link href="/booking">Booking</Link></div>
                <div className='text-base font-normal text-[#ffffff] hover:text-[#5865F2] transition hover:delay-50'><Link href="/status">Status</Link></div>
                <div className='text-base font-normal text-[#ffffff] hover:text-[#5865F2] transition hover:delay-50'><Link href="/food">Food</Link></div>
            </div>
            <div className='text-2xl font-bold text-[#5865F2]'>Contact
                <div className='text-base font-normal text-[#ffffff]'>LINE :</div>
                <div className='text-base font-normal text-[#ffffff]'>IG :</div>
                <div className='text-base font-normal text-[#ffffff]'>Email :</div>
            </div>
        </div>
        <div className='absolute bottom-2'>Copyright © 2024-2024 Skibidi All Rights Reserved. | Produced by LnwWinZa0072547</div>
    </footer>
  )
}

export default Footer