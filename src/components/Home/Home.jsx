import React, { useContext, useEffect, useState } from 'react'
import CategorieSlider from '../CategorieSlider/CategorieSlider'
import MainSlider from '../MainSlider/MainSlider'
import Products from '../Products/Products'
import { cartContext } from '../Context/CartContext'


export default function Home() {

  let {setfooterFixed} = useContext(cartContext)
  

  useEffect(()=>{
    setfooterFixed(null)
  },[setfooterFixed])

  
  return (
    <>
    <MainSlider/>
    <CategorieSlider/>
    <Products/>
    
    </>
  )
}


