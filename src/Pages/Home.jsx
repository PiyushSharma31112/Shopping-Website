import React, {useState, useEffect} from 'react'
import { Spinner, Product } from '../components/index'

function Home() {

  const API_URL = "https://api.escuelajs.co/api/v1/products"

  const [loading, setloading] = useState(false)
  const [posts, setPosts] = useState([])

  async function fetchProductData() {
    setloading(true)

    try {
        const res = await fetch(API_URL)
        const data = await res.json()
        setPosts(data)
    } catch (error) {
        console.log(error)
        setPosts([])
    }
      setloading(false)
  }

    useEffect (() => {
      fetchProductData()
    }, [])

   return (
      <div className='flex items-center justify-center'>
          <div className='max-w-xs md:max-w-6xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-2 min-h-[80vh]'>
              {
                loading ? <Spinner/> : posts.map(post => <Product key={post.id} post= {post} />)
              }
          </div>
      </div>
  )
}

export default Home
