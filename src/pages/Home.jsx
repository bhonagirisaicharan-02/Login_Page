import React, { useEffect, useState } from 'react'
import './Home.css'

function Home() {

  let [products,setProducts]=useState([])

  function fetchData() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        setProducts(data)
      })
  }

  useEffect(()=>{
    fetchData()

  },[])

  


  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
