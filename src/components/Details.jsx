import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Details() {
  let navigate = useNavigate();
  let { state } = useLocation();
   

  // GET LANGUAGES
  const languages = []
  for (const lang in state.languages) {
    languages.push(state.languages[lang])
  }
  const formattedLanguages = languages.join(',')


  // GET NATIVE-NAMES
  let place = Object.values(state.name)
  let nativeName = place[2]
   
   if (nativeName) {
    nativeName = Object.values(nativeName)[0].common;
   }else {
    nativeName = 'No Native Name';
  }

  //  GET CURRENCIES
  let currencies = state.currencies ? Object.values(state.currencies) : 'No Currency'
  let currency = currencies[0].name

  
  return (
    <div className='bg-gray-100 dark:bg-gray-800 dark:text-white pb-10 lg:pb-20 pt-[6rem]'>
      <div className='container mx-auto px-4 md:px-8 mb-12'>
        <button className='px-6 py-2 bg-white text-gray-600 shadow-md 
        rounded-md
         dark:text-gray-700' onClick={() => navigate(-1)}>
            <i className='fa fa-arrow-left pr-2'></i> Back
        </button>
      </div>

      <div className="container lg:flex lg:justify-between mx-auto py-6 md:py-2 px-4 md:px-8 ">
         <img src={state.flags?.svg} alt={state.name?.common} className="lg:w-1/3  rounded-lg shadow-sm shadow-black" />

         <div className='mt-10'>
           <motion.h2 
             className='font-bold text-2xl md:text-3xl mb-8'
             initial={{ scale:0, x:300 }}
             animate={{ scale:1, x:0 }}
             transition={{ duration: .5}}
             >{state.name?.common}</motion.h2>
           <div className='lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-4'>
              <p className='pb-2 lg:pb-0'>Native Name: <span className='text-sm text-gray-700 dark:text-gray-300 pl-1'>{nativeName}</span> </p>
              <p className='pb-2 lg:pb-0'>Population: <span className='text-sm text-gray-700 dark:text-gray-300 pl-1'>{state.population}</span> </p>
              <p className='pb-2 lg:pb-0'>Region: <span className='text-sm text-gray-700 dark:text-gray-300 pl-1'>{state.region}</span> </p>
              <p className='pb-2 lg:pb-0'>Sub Region: <span className='text-sm text-gray-700 dark:text-gray-300 pl-1'>{state.subregion}</span> </p>
              <p className='pb-10 lg:pb-0'>Capital: <span className='text-sm text-gray-700 dark:text-gray-300 pl-1'>{state.capital}</span> </p>
              <p className='pb-2 lg:pb-0'>Top Level Domain: <span className='text-sm text-gray-700 dark:text-gray-300 pl-1'>{state.tld}</span> </p>
              <p className='pb-2 lg:pb-0'>Currencies: <span className='text-sm text-gray-700 dark:text-gray-300 pl-1'>{currency}</span> </p>
              <p className='pb-2 lg:pb-0'>Languages: <span className='text-sm text-gray-700 dark:text-gray-300 pl-1'>{formattedLanguages}</span> </p>
           </div>

           <div className='mx-auto mt-6 md:mt-16'>
              <p className='mr-4 pb-2'>Border Countries: </p>

              <div className='lg:mt-0 lg:pl-7 flex flex-wrap font-light gap-3'>
                {state.borders?.map((border, index) => (
                  <p className='bg-gray-200 dark:bg-gray-600 px-[20px] py-[3px] border-[1px] border-gray-700' key={index}>{border}</p>
                ))               
                }
              </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Details