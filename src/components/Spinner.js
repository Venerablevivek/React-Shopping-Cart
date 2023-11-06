import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='w-full h-[500px] flex justify-center items-center' >
        <div className='spinner bg-slate-900' ></div>
    </div>
  )
}

export default Spinner