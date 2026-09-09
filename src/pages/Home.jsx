import React, { useEffect, useState } from 'react'
import './Home.css'

function Home() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  function fetchData() {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setProducts(data.products)
      })
      .catch((error) => {
        console.log("Error fetching products:", error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <select>
        {
            products.map((product)=>{
                return(
                    <option>{product.category}k</option>
                )
            })
        }
      </select>
 
      <div className="products-container">

        {filteredProducts.map((product) => (

          <div className="product-card" key={product.id}>

            <img
              src={product.images[0]}
              alt={product.title}
              className="product-image"
            />

            <div className="product-details">

              <h2>{product.title}</h2>

              <p>{product.description}</p>

              <p>
                <strong>Price:</strong> ${product.price}
              </p>

              <p>
                <strong>Category:</strong> {product.category}
              </p>

              <p>
                <strong>Brand:</strong> {product.brand}
              </p>

              <p>
                <strong>Rating:</strong> {product.rating}
              </p>

              <p>
                <strong>Stock:</strong> {product.stock}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Home