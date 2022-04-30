import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const notify =()=> toast.info(`Hello Mr. ${name}. Your Email is ${email} and phone number is ${phone}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,    
    })
  return (
    <div className="form">
        <input required className="name" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} type='text'/>
        <input required className="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}  type='email'/>
        <input required className="phone" placeholder='Enter Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)} type='number'/>
        <button className="formBtn" onClick={notify}>Submit</button>
        <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme='dark'
/>
    </div>
  )
}

export default Home