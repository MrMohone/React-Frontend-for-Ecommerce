import api from '../../../api'
import React, { useEffect, useState } from 'react'
import Header from './header'
import CardContainer from './CardContainer'

const HomePage = () => {
  const [products, setProducts] = useState([])
  useEffect(function(){
    api.get('products') //'products<-- for product url in django
    //promise
    .then(res => {
      console.log(res.data)
      setProducts(res.data)
    })
    .catch(err => {
      console.log(err.message)
      
    })
  }, [])

  return (
    <>
    <Header />
    <CardContainer products={products}/>
    </>
  )
}

export default HomePage