import { useState } from 'react'

import './App.css'
import TodoForm from './components/TodoForm'

function App() {
  return (
    <>
      <div className="h-150 w-screen p-3 bg-red-800 text-bold m-5 ">TODO!!
      </div>
      <TodoForm />
    </>
  )
}

export default App
