import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Ecommercecontext } from './App'

function Register() {

 

  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [user, setUser] = useState('')
  let [password, setPassword] = useState('')

  const { form, setForm } = useContext(Ecommercecontext)

  useEffect(() => {
    localStorage.setItem('userdetails',JSON.stringify(form))
  }, [form])

  function handlesubmit(e) {
    e.preventDefault()
    
    const userdetails = {
      name: name,
      email: email,
      user: user,
      password: password
    }
    
    setForm(userdetails)
    console.log(form)
    
  }


  return (
    <div className='inputplace'>
      <form onSubmit={handlesubmit}>
        <input type='text' placeholder='Enter Your Name' onChange={(e) => { setName(e.target.value) }} value={name}>
        </input><br></br>
        <input type='email' placeholder='Enter Your Email' onChange={(e) => { setEmail(e.target.value) }} value={email}>
        </input><br></br>
        <input type='name' placeholder='Enter User Name' onChange={(e) => { setUser(e.target.value) }} value={user}>
        </input><br></br>
        <input type='password' placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }} value={password}>
        </input><br></br>
        <button type='Submit'>Register</button>
      </form>

    </div>
  )
}

export default Register