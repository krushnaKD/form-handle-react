import React from 'react'
import Card from './Card'

function Cards({userData,RemoveHandle}) {
  return (
    <div className='w-full h-90 max-h-90 rounded-md p-10 flex flex-wrap gap-10 item-center justify-center'>

      {userData.map((item,index)=>{
         return <Card key={index} userData={item} RemoveHandle={RemoveHandle} id={index} />;
      })}

    </div>
  )
}

export default Cards
