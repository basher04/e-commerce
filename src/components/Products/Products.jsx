import axios from 'axios'
import Product from '../Product/Product'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'


export default function Products() {

  function getProducts(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    
  }

  let {data , isLoading} = useQuery('getProducts',getProducts)
  console.log(data?.data.data)

  if(isLoading) return <Loading/>

  return (
    <>
    <div className="container my-5 pt-5">
      <div className="row">
        {data?.data.data.map((item)=> <Product item={item} key={item._id} /> )}
      </div>
    </div>
    </>
  )
}
