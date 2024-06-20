import React, { useContext } from 'react'
import amazonLogo from "../../assets/images/amazon-png-logo-vector-6701.png"
import mastarCard from "../../assets/images/discover-logo-png-pic-5681.png"
import paypal from "../../assets/images/paypal-logo-png-2117.png"
import appstore from "../../assets/images/pngwing.com.png"
import googleStore from "../../assets/images/pngwing.com (1).png"
import { cartContext } from '../Context/CartContext'

export default function Footer() {

    let {footerFixed} = useContext(cartContext)

    function amazon(){
        window.open("https://www.amazon.eg/")
    }
    function masterCom(){
        window.open("https://www.mastercard.us/")
    }
    function paypalCom(){
        window.open("https://www.amazon.eg/")
    }



return (
    <div  className={`bg-main-light py-4 ${footerFixed}`}>
    <div className="container my-3">
        <h2>Get the FreshCart App</h2>
        <p>We Will Send you a link , open it on your phone to download the app</p>

        <div className="row pt-3 pb-4 border-bottom">
            <div className="col-10">
                <input className="form-control " type="email"  placeholder='Email...'/>
            </div>
            <div className="col-2">
                <button className='btn bg-main text-white'>Share App Link</button>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
            <div className="d-flex  mt-4">
                <h4>Payment Partners</h4>
                <div className=' d-flex ms-3'>
                <img onClick={()=>amazon()} src={amazonLogo} className='w-100 mx-2 mt-2 cursor-pointer' height={30} alt="" />
                <img onClick={()=>masterCom()} src={mastarCard} className='w-100 mx-2 mt-1 cursor-pointer' height={30} alt="" />
                <img onClick={()=>paypalCom()} src={paypal} className='w-100 mx-2 pb-4 cursor-pointer' height={70} alt="" />
                </div>
            </div>
            </div>
            <div className="col-md-6">
            <div className="d-flex justify-content-end mt-4">
                <h4 className='pt-1'>Get deliveries with FreshCard </h4>
                <div className="d-flex  ms-3">
                    
                    <a href="https://www.apple.com/eg/app-store/" target="_blank" rel="noreferrer">
                    <img src={appstore} width={110} height={50} alt="" />
                    </a>
                    <a className='pt-1' href="https://play.google.com/" target="_blank" rel="noreferrer">
                    <img src={googleStore} width={100} height={40}  alt="" />
                    </a>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}
