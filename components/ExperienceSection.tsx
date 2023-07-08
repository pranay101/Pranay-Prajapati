import React from 'react'

type Props = {}

function ExperienceSection({}: Props) {
  return (
    <section className='h-screen min-w-full bg-gray-50 relative'>
        <h1 className='font-light absolute top-6 right-36 text-[#141414] text-6xl'>Experience</h1>
        <div className='grid grid-cols-2 px-20 h-full overflow-hidden mx-auto'>
            <div className=' top-0 left-0 w-full h-[95vh] overflow-hidden mx-auto text-center'>
                  <svg className='h-full inline-block' viewBox="0 0 51 483" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                      <path d="M27.4627 0.72964C27.3134 0.197922 26.7613 -0.112075 26.2296 0.0372408C25.6979 0.186557 25.3879 0.738643 25.5372 1.27036L27.4627 0.72964ZM26.5 248L27.4398 248.342L27.4524 248.307L27.4623 248.272L26.5 248ZM21.1667 477C21.1667 479.946 23.5545 482.333 26.5 482.333C29.4455 482.333 31.8333 479.946 31.8333 477C31.8333 474.054 29.4455 471.667 26.5 471.667C23.5545 471.667 21.1667 474.054 21.1667 477ZM25.5372 1.27036C39.0685 49.4555 45.8564 86.9928 45.8766 124.501C45.8969 162.008 39.1496 199.545 25.5377 247.728L27.4623 248.272C41.1004 199.996 47.897 162.262 47.8766 124.5C47.8563 86.7373 41.0191 49.0042 27.4627 0.72964L25.5372 1.27036ZM25.5602 247.658C9.95218 290.593 2.53159 324.733 2.73668 359.808C2.94171 394.872 10.7678 430.8 25.547 477.303L27.453 476.697C12.6977 430.269 4.93994 394.565 4.73664 359.796C4.5334 325.038 11.88 291.143 27.4398 248.342L25.5602 247.658Z" fill="black" />
                      <circle cx="36" cy="39" r="4" fill="black" />
                      <circle cx="31" cy="232" r="4" fill="black" />
                      <circle cx="12" cy="289" r="4" fill="black" />
                      <circle cx="4" cy="354" r="4" fill="black" />
                      <circle cx="13" cy="430" r="4" fill="black" />
                      <circle cx="40" cy="190" r="4" fill="black" />
                      <circle cx="46" cy="153" r="4" fill="black" />
                      <circle cx="47" cy="109" r="4" fill="black" />
                      <circle cx="45" cy="95" r="4" fill="black" />
                  </svg>


            </div>
            <div className='flex justify-center items-center'>
                <div className='h-[60%] w-[50%] bg-gray-400'>

                </div>
            </div>
        </div>
    </section>
  )
}

export default ExperienceSection