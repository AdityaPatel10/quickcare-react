import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='border border-amber-200 text-black flex flex-col justify-center items-center min-h-screen'>
        <form>
          <div className='flex flex-col p-2'>
            <label>
              Email*
            </label>
            <input className='p-2 my-2 border border-transparent bg-cyan-500 rounded' type='email' placeholder='Enter your email address' required></input>
          </div>
          <div>
            <label>
              Password*
            </label>
            <input type='password' placeholder='Enter your password' required></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login