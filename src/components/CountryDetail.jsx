import React from 'react'

function CountryDetail({ title, image_url, population, region, capital }) {
  return (
    <div className=' rounded-lg container shadow-md bg-white pb-4 dark:bg-gray-700 dark:text-white h-[400px]'>
        <div className='border-b border-gray-700'>
          <img src={image_url} alt={title} className='w-full rounded-tl-lg rounded-tr-lg shawdow-md'/>
        </div>
      

        <div className='p-4'>
          <h2 className='text-1xl font-semibold mb-4'>{title}</h2>
          <p className='text-[10px]'>Population: <span className='font-light text-gray-700 dark:text-gray-200'>{population}</span></p>
          <p className='text-[10px]'>Region: <span className='font-light text-gray-700 dark:text-gray-200'>{region}</span></p>
          <p className='text-[10px]'>Capital: <span className='font-light text-gray-700 dark:text-gray-200'>{capital}</span></p>
        </div>
    </div>
  )
}

export default CountryDetail