import React from 'react'
import { assets } from '../assets/assets'

function Result() {
  return (<form className='flex justify-center'>
    <div>
      <div className='relative'>
        <img src={assets.sample_img_1} alt="" className='max-w-sm rounded'/>
        <span className='absolute b-0 left-0 h-1 bg-emerald-500 w-full transition-all duration-[10s]'/>
      </div>
      <p>Loading......</p>
      <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full '>
        <input type="text" placeholder='Describe What You Want TO Generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20'/>
        <button type='submit' className='bg-purple-900 px-10 sm:px-16 py-3 rounded-full'>Generate</button>
      </div>
    </div>
    </form>
  )
}

export default Result
