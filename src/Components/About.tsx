import React from 'react'
import about from "../assets/about.jpg"

function About() {
  return (
    <div className="px-4 py-0 sm:py-10 sm:px-10  flex flex-col sm:flex-row  md:justify-between md:px-20  md:py-20" id='about'>
      <div  >
            <img src={about} className=' h-2/4 sm:h-56 md:h-96 rounded shadow-xl shadow-gray-300 card ' alt="not found" />
        </div>
       <div  className='flex flex-col sm:px-5 md:px-20   w-auto md:w-7/12 '> 
       <h1 className=' text-2xl sm:text-3xl md:text-4xl my-6  text-amber-500  md:text-start font-extrabold'>ABOUT US</h1>
        <p className=' text-xl  sm:text-2xl  text-yellow-700 md:text-start '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Dolorem ullam eius fuga sed non quis quos impedit repellat nihil quidem
        expedita doloribus laboriosam, nostrum officia vero dolore adipisci dicta delectus Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi perspiciatis minus neque, eum quasi commodi fugiat et temporibus ipsum maxime asperiores 
        itaque odit natus optio. Rerum numquam iure modi aliquid.</p>
        </div>
        
    </div>
  )
}

export default About