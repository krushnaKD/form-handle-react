import React, { useState } from 'react'
import Cards from './components/Cards'
import Card from './components/Card'
import Form from './components/Form'

function App() {

  const [data,setdata] = useState([])

const formData = (info) =>{
  setdata([...data,info])
}
const RemoveHandle = (id) =>{
  setdata(()=>data.filter((item,index)=> index!=id))
}

  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col items-center  justify-center p-10 ' >
     
      <Cards userData={data} RemoveHandle={RemoveHandle}/>
      <Form formData={formData}   />
      

    </div>
  )
}

export default App
