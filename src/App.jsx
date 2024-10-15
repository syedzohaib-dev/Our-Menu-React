import React from 'react'
import Header from './components/Header'
import "./app.css"
import Singlecard from './components/Singlecard'


function App() {
  return (
    <div className='container-fluid cont'>
      <Header />
      <div className="cardContainer">
        <Singlecard />
      </div>

    </div>
  )
}

export default App






























// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [advice, setAdvice] = useState('')
//   const [count, setCount] = useState(0)
//   async function getAdvice() {
//     const res = await fetch("https://api.adviceslip.com/advice")
//     const data = await res.json()
//     setAdvice(data.slip.advice)
//     setCount((c) => c + 1)
//   }
//   useEffect(function () {
//     getAdvice()

//   }, [])

//   return (
//     <>
//       <h1>{advice}</h1>
//       <button onClick={getAdvice}>Get Advice</button>
//       <p>you have click <strong>{count}</strong> time</p>

//     </>
//   )
// }

// export default App
