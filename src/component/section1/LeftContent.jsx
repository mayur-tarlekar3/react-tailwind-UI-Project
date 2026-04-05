import React from 'react'
import LeftCard from './LeftCard'

const LeftContent = (props) => {
  return (
    <div id="right" className='h-full w-2/3 p-6 flex flex-nowrap overflow-x-auto gap-10  '>
         {
          props.users.map(function(e,idx){
            return<LeftCard key={idx} id={idx} color={e.color} img={e.img} tag={e.tag} />
          })
         }
    </div>
  )
}

export default LeftContent