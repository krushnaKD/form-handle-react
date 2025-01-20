import React from 'react'
import { useForm } from 'react-hook-form'

function Form({formData}) {
 const {register,handleSubmit,reset} = useForm()

 const handleformdata = ( info) =>{
      formData(info);
      reset()
 }


       
  return (
    <div className='mt-10 ' >
      <form className='' action="" onSubmit={handleSubmit(handleformdata)}>
        <input {...register('name')} className=' px-2 py-1 outline-none rounded-md text-base ' type="text" placeholder='Name' />
        <input {...register('email')} className=' px-2 py-1 ml-10 outline-none rounded-md text-base' type="text" placeholder='email@gmail.com' />
        <input {...register('image')} className=' ml-10 gap-10 px-2 py-1 outline-none rounded-md text-base ' type="text"   placeholder='img.url' />
        <input  className='bg-orange-500 px-4 py-1 ml-10 text-red rounded-full'  type="submit"  />
      </form>
    </div>
  )
}
 
export default Form
