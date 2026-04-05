import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1content = (props) => {
  return (
    <div className='pb-20 pt-6 flex items-center gap-10 h-[90vh]'>
    <RightContent />
    <LeftContent users={props.users} />
    </div>
  )
}

export default Page1content