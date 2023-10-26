import React from 'react'


function Navbar() {
  return (
    <div className='flex flex-row justify-between'>
        <h1 className=' p-5 text-center text-3xl font-extrabold text-amber-500'>
        BURGHAR
    </h1>
    <ul className="flex flex-row justify-evenly basis-1/2 p-7 hover:text-#f59e0b font-extrabold ">
        <li className=' py-2 px-4'>HOME</li>
        <li className=' py-2 px-4'>ABOUT US</li>
        <li className=' py-2 px-4'> MENU</li>
        <li className=' py-2 px-4'> CONTACT US</li>
        <li className='mt-0 '><button className='bg-amber-500 text-white font-bold py-2 px-4 rounded  '>SHOP ONLINE</button></li>
      
    </ul>
    </div>
  )
}

export default Navbar;