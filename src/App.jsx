import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <>
      <div className='w-[98%] md:w-[75%] mx-auto'>
        <Header/>
        <Main/>
      </div>
    </>
  )
}

export default App
