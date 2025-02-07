import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";
const Ship = () => {
  return (
    <section className='ship'>
        <div className='w-[90%] m-auto flex flex-col gap-[50px]'>
            <h3 className='text-center font-[700] text-[36px]'>Ship faster with endless integrations</h3>
            <div className='items grid grid-cols-3 gap-4'>
                {
                    Array.from({length:6}).map((_, idx) =>
                        <div key={idx} className='h-[80px] p-[20px] ship-item flex w-full items-center gap-3 hover:bg-gray-900'>
                        <RiTailwindCssFill className='text-[28px]' />
                        <div className='flex flex-col gap-2'>
                            <h4>Tailwind</h4>
                            <h6>Tailwind des</h6>
                        </div>
                        </div> )
                }

            </div>
        </div>
    </section>
  )
}

export default Ship