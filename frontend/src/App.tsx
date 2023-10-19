import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='px-12 flex justify-start items-center w-full h-[75px] shadow-sm'>
        <div className='flex items-center justify-start w-full gap-2'>
          <img src="logo.png" className='h-16'></img>
          <h1 className='text-2xl font-bold text-blue-700'>acadhouse</h1>
        </div>
        <div className="w-full flex justify-end">
          <div className='flex items-center justify-center gap-2 border-2 px-4 py-1 rounded-full'>
            <p className='text-xl font-medium text-zinc-700'>login</p>
            <span className="material-symbols-outlined text-4xl text-zinc-700">account_circle</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
