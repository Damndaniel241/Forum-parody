import React from 'react'
import Topheader from '../components/Topheader'
import Bottomfooter from '../components/Bottomfooter'
import { useState } from 'react'


function Login() {

  const [login,setLogin] = useState("false")
  return (
    <>
    <Topheader/>
    <div className='login mb-5'>
    <div className="container my-box-shadow p-4 rounded-2 naira-bg">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="" className="form-label">email</label>
          <input type="email"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
        
        </div>

        <div class="col-md-6">
          <label htmlFor="" className="form-label">password</label>
          <input type="password"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
        
        </div>

        <button className='btn naira-green mt-4 text-light' onClick={()=>setLogin("true")} type="button">{login}</button>
      </div>
    </div>
    </div>
    <Bottomfooter/>
    
    
    </>
  )
}

export default Login