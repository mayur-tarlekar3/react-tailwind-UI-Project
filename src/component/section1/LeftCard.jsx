import React from 'react'
import LeftCardContent from './LeftCardContent'

const LeftCard = (props) => {
  return (
    <div className='h-full  shrink-0 w-100  overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
         <LeftCardContent id={props.id} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default LeftCard