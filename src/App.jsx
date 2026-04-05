import React from 'react'
import Section1 from './component/section1/Section1'
import Section2 from './component/section2/Section2'

const users=[
  {img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',color:'black' ,intro:'',tag:'Satisfied'},
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',color:'pink' ,intro:'',tag:'Underserved'},
      {img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',color:'royalblue' ,intro:'',tag:'Satisfied'},
       {img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',color:'purple' ,intro:'',tag:'Working'},
        {img:'https://plus.unsplash.com/premium_photo-1771941810652-48fb977a0c32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',color:'gray' ,intro:'',tag:'Heart'}
]


const App = () => {
  return (
    <div>
      <Section1 users={users} />
      <Section2 />

    
      
    </div>
  )
}

export default App