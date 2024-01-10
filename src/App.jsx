import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('black');

  let changeHandler = (bgColor) => {
    setcolor(bgColor);
  }
  return (
    <>
      <div className="w-full h-screen duration-200 flex justify-center items-center" style={{ backgroundColor: color }}>
        <div className="flex gap-4 px-5 py-3 rounded-lg bg-gray-400 border border-black">
          <button onClick={(e) => changeHandler(e.target.innerHTML)} className='hover:bg-red-700 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-xl'>Red</button>
          <button onClick={(e) => changeHandler(e.target.innerHTML)} className='hover:bg-green-800 bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-xl' >Green</button>
          <button onClick={(e) => changeHandler(e.target.innerHTML)} className='hover:bg-blue-800 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-xl'>Blue</button>
          <button onClick={(e) => changeHandler(e.target.innerHTML)} className='hover:bg-slate-900 bg-black text-white px-4 py-2 rounded-lg font-semibold text-xl'>Black</button>
          <button onClick={(e) => changeHandler(e.target.innerHTML)} className='hover:bg-gray-300 bg-white text-black px-4 py-2 rounded-lg font-semibold text-xl'>White</button>
        </div>
      </div>
    </>
  )
}

export default App
