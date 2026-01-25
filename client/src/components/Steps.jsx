import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How It Works</h1>
      <p className='text-lg text-gray-600 mb-8'>Transform Words Into Stunning Images</p>
      
      <div>
        {stepsData.map((item, index) => (
          <div key={index} className="flex items-start gap-4 mb-6">
            <img src={item.icon} alt={item.title} className="w-12 h-12" />
            <div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steps