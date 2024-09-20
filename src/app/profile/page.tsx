import React from 'react'

function profilePage() {
  return (
    <div className='min-h-screen min-w-screen bg-[--neutrals-color] flex justify-center laptop:py-20 desktop:py-32'>

      {/* My Profile */}
      <div className='w-full px-32'>
        <h1 className='laptop:text-3xl desktop:text-4xl font-black text-[--primary-color] py-2'>My Profile</h1>

        {/* Profile */}
        <div className='grid grid-rows-3 gap-y-5'>

          <div className='shadow-md rounded-md bg-[#303030] flex items-center px-32'>
            <h1 className='pr-48'>Image</h1>
            <div>
              <h3 className='laptop:text-2xl desktop:text-3xl font-bold'>Full Name</h3>
              <h6 className='laptop:text-xl desktop:text-2xl'>Email</h6>
            </div>
          </div>

          {/* Personal Information */}
          <div className='shadow-md rounded-md bg-[#303030] w-full h-min px-9 laptop:py-5 desktop:py-9'>
            <h3 className='laptop:text-3xl desktop:text-4xl font-extrabold pb-5'>Personal Information</h3>

            <div className='grid grid-cols-2 px-5'>
              <div className='laptop:pb-2 desktop:pb-6'>
                <h6 className='laptop:text-2xl desktop:text-3xl font-bold text-[#bababa]'>Fisrt Name</h6>
                <p className='laptop:text-base desktop:text-2xl'>Name</p>
              </div>

              <div className='laptop:pb-2 desktop:pb-6'>
                <h6 className='laptop:text-2xl desktop:text-3xl font-bold text-[#bababa]'>Last Name</h6>
                <p className='laptop:text-base desktop:text-2xl'>Surname</p>
              </div>

              <div className='laptop:pb-2 desktop:pb-6'>
                <h6 className='laptop:text-2xl desktop:text-3xl font-bold text-[#bababa]'>Email</h6>
                <p className='laptop:text-base desktop:text-2xl'>mail@email.com</p>
              </div>

              <div className='laptop:pb-2 desktop:pb-6'>
                <h6 className='laptop:text-2xl desktop:text-3xl font-bold text-[#bababa]'>Phone</h6>
                <p className='laptop:text-base desktop:text-2xl'>012-345-6789</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className='shadow-md rounded-md bg-[#303030] w-full h-min px-9 laptop:py-5 desktop:py-9'>
            <h3 className='laptop:text-2xl desktop:text-3xl font-semibold'>Stats</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profilePage