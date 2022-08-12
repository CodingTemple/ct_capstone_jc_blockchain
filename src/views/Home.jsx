import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Comics from '../components/Comics'
import { getProducts } from '../firebase'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then( (products) => {
      console.log( products)
      products.filter((item) => {
        item.price = Number(item.price)
        item.qty = 0
      })
      setProducts(products)
    }).catch((error) => {
      console.log(error)
    })
  }, [])



  return (
    <div className="home">
      <Header />
      <Comics products={products} />
    </div>
  )
}

export default Home
