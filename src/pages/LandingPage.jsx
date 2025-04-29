import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="w-screen h-screen relative max-w-md mx-auto">
        <div className="bg-white h-fit bottom-0 absolute w-full p-4 flex flex-col items-start">
          <h3 className='font-bold text-3xl'>Welcome to PopX</h3>
          <p className='text-gray-500 font-lg mt-3'>
          Lorem ipsum dolor sit amet,
          </p>
          <p className='text-gray-500 font-lg mt-2'>consectetur adipisicing elit.</p>
          <button className="bg-[#6c25ff] text-white px-4 py-2 rounded-md mt-4 w-full"> 
            <Link to="/signup">Create Account</Link>
          </button>
          <button className="bg-[#cebafb] px-4 py-2 rounded-md mt-4 w-full">
            <Link to="/login">Already Registered? Login</Link>
          </button>
        </div>
      </div>
  )
}


  

export default LandingPage
