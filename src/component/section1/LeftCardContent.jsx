import React from 'react'

const LeftCardContent = (props) => {
  return (
   <div className='absolute top-0  w-full h-full p-8 flex flex-col justify-between' >
           <h2 className='bg-white text-2xl font-bold rounded-full h-14 w-14  flex items-center justify-center'>{props.id+1}</h2>
           <div>
            <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita est odio earum amet aspernatur beatae!
            </p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-8 py-3 rounded-full '>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-3 py-2 rounded-full '><i className="ri-arrow-right-fill"></i></button>
            </div>
           </div>
         </div>
  )
}

export default LeftCardContent