import { useState } from 'react'
import Header from './components/Header'
import MainApp from './components/MainApp'
// import heroImg from './assets/hero.png'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[hsl(243_96%_9%)] h-screen w-screen md:pt-6 md:px-12 sm:p-4 p-2'>
        <Header />
        <MainApp />
      </div>
    </>
  )
}

export default App
