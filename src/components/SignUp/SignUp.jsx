import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/freshcart-logo.svg"


export default function SignUp() {

  let navigate = useNavigate() 

  const [errorMessage, seterrorMessage] = useState('')
  const [loading, setLoading] = useState(true)

  function sendDataToBackend(values){

    setLoading(false)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
    .then(({data})=> {
      console.log(data)
      if(data.message === "success"){
        navigate("/signin")
      }
    }) 
    .catch((err)=>{
      console.log(err.response.data.message)
      seterrorMessage(err.response.data.message)
      setLoading(true)
    })
  }

  function validationSchema(){
    
    let schema = new Yup.object({
      name: Yup.string().min(2).max(20).required(),
      email: Yup.string().required(),
      password: Yup.string().matches(/^[A-Z][A-Za-z0-9]{6,}$/).required(),
      rePassword: Yup.string().oneOf([Yup.ref('password')]).required()
      
    })

    return schema
  }

  let register = useFormik({
    initialValues:{
      name: '' ,
      email: '' ,
      password: '' ,
      rePassword: ''
    },
    validationSchema,
    onSubmit:(values)=>{
      sendDataToBackend(values)
    }
  })

  

  return (
    <>
    <div className="wrapper">

      <div className="logo">
        <img className='w-100' src={logo} alt=""/>
      </div>
      <div className="text-center mt-4 name">
        Register Now:
      </div>

      <form onSubmit={register.handleSubmit} >

          <div class="form-field d-flex align-items-center">
            <span class="far fa-user"></span>
            <input onBlur={register.handleBlur} onChange={register.handleChange} type="text" name='name' id='name' placeholder='Name:'/>
          </div>
        {register.errors.name && register.touched.name ? <div className="alert alert-danger">{register.errors.name}</div> : ''}

        

          <div class="form-field d-flex align-items-center">
            <span class="fa-solid fa-envelope"></span>
            <input onBlur={register.handleBlur} onChange={register.handleChange} type="email" name='email' id='email' placeholder='Email:'/>
          </div>
          {register.errors.email && register.touched.email ? <div className="alert alert-danger">{register.errors.email}</div> : ''}

          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input onBlur={register.handleBlur} onChange={register.handleChange} type="password" name='password' id='password' placeholder='Password:'/>
          </div>
          {register.errors.password && register.touched.password ? <div className="alert alert-danger">{register.errors.password}</div> : ''}

          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input onBlur={register.handleBlur} onChange={register.handleChange} type="password" name='rePassword'  id='repassword' placeholder='rePassword:'/>
          </div>
          {register.errors.rePassword && register.touched.rePassword ? <div className="alert alert-danger">{register.errors.rePassword}</div> : ''}
          {errorMessage? <div className="alert alert-danger">{errorMessage}</div> : ''}

        <button disabled={!(register.dirty && register.isValid)} type="submit" className="btn bg-main text-white">
          {loading ? "SignUp" : <i className="fa-solid fa-spinner fa-spin px-3" ></i>}
        </button>
      </form>
    </div>
    </>
  )
}



{/* <div class="wrapper">
        <div class="logo">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="">
        </div>
        <div class="text-center mt-4 name">
            Twitter
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username">
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password">
            </div>
            <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>
    </div> */}























    // <>
    // <div className="wrapper">

    //   <div className="logo">
    //     <img className='w-100' src={logo} alt=""/>
    //   </div>
    //   <div className="text-center mt-4 name">
    //     Register Now:
    //   </div>

    //   <form onSubmit={register.handleSubmit} >

    //     <label htmlFor="name">Name:</label>
    //     <input onBlur={register.handleBlur} onChange={register.handleChange} type="text" name='name' className="form-control mb-3"  id='name' placeholder=''/>

    //     {register.errors.name && register.touched.name ? <div className="alert alert-danger">{register.errors.name}</div> : ''}

    //     <label htmlFor="email">Email:</label>
    //     <input onBlur={register.handleBlur} onChange={register.handleChange} type="email" name='email' className="form-control mb-3"  id='email' placeholder=''/>
    //     {register.errors.email && register.touched.email ? <div className="alert alert-danger">{register.errors.email}</div> : ''}

    //     <label htmlFor="password">Password:</label>
    //     <input onBlur={register.handleBlur} onChange={register.handleChange} type="password" name='password' className="form-control mb-3"  id='password' placeholder=''/>
    //     {register.errors.password && register.touched.password ? <div className="alert alert-danger">{register.errors.password}</div> : ''}

    //     <label htmlFor="repassword">rePassword:</label>
    //     <input onBlur={register.handleBlur} onChange={register.handleChange} type="password" name='rePassword' className="form-control mb-3"  id='repassword' placeholder=''/>
    //     {register.errors.rePassword && register.touched.rePassword ? <div className="alert alert-danger">{register.errors.rePassword}</div> : ''}

    //     {errorMessage? <div className="alert alert-danger">{errorMessage}</div> : ''}

    //     <button disabled={!(register.dirty && register.isValid)} type="submit" className="btn bg-main text-white">
    //       {loading ? "SignUp" : <i className="fa-solid fa-spinner fa-spin px-3" ></i>}
    //     </button>
    //   </form>
    // </div>
    // </>