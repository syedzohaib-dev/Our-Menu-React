import React, { useState } from 'react'
import Header from './components/Header'
import "./app.css"
import Singlecard from './components/Singlecard'
import Footer from './components/Footer'


function App() {

  const pizzas = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUaWoqO8L2xnu1MrKqTJCzHHuDoJNWmfBIg&s",
      title: "Focaccia",
      description: "A traditional Italian flatbread topped .",
      saleQuantity: 120
    },
    {
      img: "https://media.istockphoto.com/id/657837236/photo/pizza-with-mushrooms-on-wooden-table-italian-food.jpg?s=612x612&w=0&k=20&c=8_0drbLAA5ggGb5ViABmJdXphu1rd0JIM22QsEeu2Mc=",
      title: "Pizza Funghi",
      description: "A delicious pizza topped with a variety of fresh mushrooms.",
      saleQuantity: 85
    },
    {
      img: "https://live.staticflickr.com/2074/2217142211_cfcc398bf3_z.jpg",
      title: "Pizza Salamino",
      description: "Spicy salami, tomato sauce, and mozzarella cheese.",
      saleQuantity: 200
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067",
      title: "Pizza Margherita",
      description: "Classic pizza with fresh tomatoes.",
      saleQuantity: 300
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pizza_quattro_formaggi_at_restaurant%2C_Chalk_Farm_Road%2C_London.jpg/1200px-Pizza_quattro_formaggi_at_restaurant%2C_Chalk_Farm_Road%2C_London.jpg",
      title: "Quattro Formaggi",
      description: "A blend of four different cheeses including mozzarella.",
      saleQuantity: 150
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDZNPLnaY1fbvAOKTPeC6LyGlIHPtST9b6A&s",
      title: "Pizza Prosciutto",
      description: "A savory pizza topped with prosciutto.",
      saleQuantity: 175
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5u4U4vD5XSWv5oEBt1SFK9isb_FGkvWqPYA&s",
      title: "Pizza Diavola",
      description: "A fiery pizza with spicy pepperoni.",
      saleQuantity: 220
    },
    {
      img: "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg",
      title: "Pizza Vegetariana",
      description: "A colorful pizza with grilled vegetables.",
      saleQuantity: 140
    }
  ];




  return (
    <div className='container-fluid cont'>
      <Header />
      <div className="cardContainer">
        {
          pizzas.map((pizza, index) => {
            console.log(pizza.description);
            console.log(pizza.title);
            console.log(pizza.img);
            return (
              <Singlecard

                key={index}
                img={pizza.img}
                title={pizza.title}
                description={pizza.description}
                saleQuantity={pizza.saleQuantity}

              />
            )


          })
        }
      </div>

      <Footer />

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
