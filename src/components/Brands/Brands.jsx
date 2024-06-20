import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { baseURL } from '../Utils/Baseurl'
import { useQuery } from 'react-query'
import { cartContext } from '../Context/CartContext'
import Loading from '../Loading/Loading'

export default function Brands() {
  
  let {setfooterFixed} = useContext(cartContext)

  function getBrand(){
    return axios.get(baseURL +'brands')
  }

  let {data, isLoading} = useQuery('getBrand',getBrand)
  console.log(data?.data.data)

  useEffect(()=>{
    setfooterFixed(null)
  },[setfooterFixed])

  if(isLoading) return <Loading/>

  return (
    <>
    <div className="container my-5 pt-5">
      <div className="row g-4">
        {data?.data.data.map((value)=>{
          return<div key={value._id} className="col-md-3">
                  <div className="item product">
                    <img src={value.image} className='w-100' alt="" />
                    <p className="text-center">{value.name}</p>
                  </div>
                </div>
        })}
      </div>
    </div>
    </>
  )
}
