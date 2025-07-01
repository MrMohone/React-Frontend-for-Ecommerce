import api from '../../../api'
import React, { useEffect } from 'react'
import Header from './header'
import CardContainer from './CardContainer'

const HomePage = () => {
  useEffect(function(){
    api.get('products') //'products<-- for product url in django
    //promise
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [])

  return (
    <>
    <Header />
    <CardContainer />
    </>
  )
}

export default HomePage