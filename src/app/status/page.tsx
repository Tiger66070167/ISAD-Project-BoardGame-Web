import React from 'react'
import Link from 'next/link'

function statusPage() {
  return (
    <div className='laptop:aspect-[16/8.4] bg-[--neutrals-color]'>
      <div className='grid grid-cols-2 pt-32'>
        <div className='pl-32 flex'>
          <h1 className = "text-3xl text-[#5865F2] font-bold ">รายการบอร์ดเกม</h1>
        </div>
          
        <div className='pl-32 flex items-end'>
          <input type="text" placeholder='searh boardgame' className='text-[#000000] mt-1 px-3 py-2 border-b shadow-sm border-slate-300 w-96 rounded-lg sm:text-sm focus:outline-none focus:border-[--primary-color] transition focus:duration-200'/>
        </div>
      </div>
    </div>
  )
}

export default statusPage