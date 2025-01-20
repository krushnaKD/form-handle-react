import React from 'react'

function Card({userData,RemoveHandle,id}) {
  return (
<div className='w-44 h-60 bg-zinc-100 flex-col flex items-center rounded-lg '>
      <div className='w-20 h-20 bg-red-300 rounded-full mt-2 overflow-hidden'>
             <img className='object-cover w-full h-full' src={userData.image} alt="" />
      </div>
      <h1 className='font-semibold text-xl  ' >{userData.name}</h1>
      <h3 className='text-xs mt-1 font-semibold ' >{userData.email}</h3>
      <p className='text-xs text-center mt-1' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure ab quia,  molestiae.</p>
      <button onClick={()=>RemoveHandle(id)} className='bg-red-600 px-3 mt-4 rounded-lg' >Remove It</button>
    </div>
    )  
}

export default Card
