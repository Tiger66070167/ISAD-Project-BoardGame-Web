import React from 'react'
import Link from 'next/link'

function loginPage() {
  return (
    <div className='min-h-screen min-w-screen bg-[--neutrals-color]'>

        {/* laptop:px-96 desktop:px-[32rem] */}
        <div className='flex justify-center items-center tablet:pt-16 laptop:pt-20 desktop:pt-28 laptop:pb-12 desktop:pb-22'>
            <div className='shadow-md rounded-lg bg-[#303030] flex flex-col pt-8 laptop:w-96 desktop:w-[500px] h-auto pb-20'>

                <div>
                    <h1 className='laptop:text-3xl desktop:text-4xl laptop:py-5 desktop:py-12 font-black text-[--primary-color] pt-8 flex justify-center items-center'>Login</h1>
                </div>
                    <form className='w-full px-10'>
                        <div className='pb-5'>
                            <label className='laptop:text-xl desktop:text-2xl font-semibold'>Email</label>
                            <br />
                            <input type="text" placeholder='Enter your email' className='text-[#bababa] mt-1 px-3 py-2 bg-[#303030] border-b shadow-sm border-slate-300 w-full rounded-none sm:text-sm focus:outline-none focus:border-[--primary-color] transition focus:duration-200'/>
                        </div>
                        <div className='pb-5'>
                            <label className='laptop:text-xl desktop:text-2xl font-semibold'>Password</label>
                            <br />
                            <input type="password" placeholder='Enter your password' className='text-[#bababa] mt-1 px-3 py-2 bg-[#303030] border-b shadow-sm border-slate-300 w-full rounded-none sm:text-sm focus:outline-none focus:border-[--primary-color] transition focus:duration-200'/>
                        </div>
                        <div className='flex justify-center items-center pt-5 w-full laptop:text-xl desktop:text-2xl'>
                            <button className='bg-[--primary-color] w-full shadow-md rounded-full font-semibold py-3 text-black'>Login</button>
                        </div>
                        <div className='flex justify-center items-center pt-2 laptop:text-sm desktop:text-lg'>
                            <p>Don't have an account? <span className='text-[--primary-color] font-black'><Link href="/register">Register</Link></span></p>
                        </div>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default loginPage