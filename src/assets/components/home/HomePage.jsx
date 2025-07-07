import api from '../../../api'
import React, { useEffect, useState } from 'react'
import Header from './header'
import CardContainer from './CardContainer'
import PlaceHolderContainer from '../ui/PlaceHolderContainer'
import Error from '../ui/Error'
import { randomValue } from '../../../GenerateCartCode'

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(function(){
    if(localStorage.getItem('cart_code') === null){
      localStorage.setItem('cart_code', randomValue)
    }
  },[])

  useEffect(function(){
    setLoading(true)
    api.get('products') //'products table from db
    //promise
    .then(res => {
      console.log(res.data)
      setProducts(res.data)
      setLoading(false)
      setError("")
    })
    .catch(err => {
      console.log(err.message)
      setLoading(false)  
      setError(err.message)    
    })
  }, [])

  return (
    <>
    <Header />
   
    {error && <Error error={error}/>} {/* if error exist, display <Error/> */}
    {loading && <PlaceHolderContainer/>}{/* if if loading is true, display <PlaceHolderContainer/>}*/}
    {loading || error != ""  || <CardContainer products={products}/>}{/* i don'tunderstand this logic */}
    
    </>
  )
}

export default HomePage