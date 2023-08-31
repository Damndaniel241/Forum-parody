import React, { useLayoutEffect,useState,useEffect,useRef } from 'react'
import Topheader from '../components/Topheader';
import Bottomfooter from '../components/Bottomfooter';
// import {const first = useRef(second)}

function Signup() {

  function handleClick(){
    alert("hello");
  }


  const sel = useRef()
  const lb = useRef()

  const [num, setNum] = useState("false")



  // useEffect(function(){

  //   sel.style.color = "red"
  //   lb.style.backgroundColor = "red"
  // })
  
  return (

    <>
    <Topheader/>
    <div className='signup mb-5'>
      <h1 className="text-center mb-5">Create An Account</h1>
      <form  className="">
      <div className="container p-3 rounded-3 my-box-shadow naira-bg">
        <div className="row">
        <div ref={sel} class="col-md-6">
          <label  htmlFor="inPUT" className="form-label">Username</label>
          <input onChange={(e)=>console.log(e.target.value)} type="text"
            className="form-control " name="username" id="inPUT" aria-describedby="helpId" placeholder=""/>
         
        </div>
     
      
        <div class="col-md-6">
          <label htmlFor="" className="form-label ">Email</label>
          <input type="email"
            className="form-control" name="email" id="" aria-describedby="helpId" placeholder=""/>
        </div>
     <div class="col-md-6">
       <label htmlFor="" class="form-label">Password</label>
       <input type="password" class="form-control" name="password1" id="" placeholder=""/>
     </div>
        <div class="col-md-6">
          <label htmlFor="" className="form-label ">confirm password</label>
          <input type="password"
            className="form-control" name="password2" id="" aria-describedby="helpId" placeholder=""/>
        </div>
        <div class="col-md-6 mb-4">
          <label htmlFor="" className="form-label ">photo</label>
          <input type="file" 
            className="form-control" name="" id="photo" aria-describedby="helpId" placeholder=""/>
        </div>


        <button type="button" onClick={()=>setNum("true")} className='btn  text-center naira-green text-light '>
          {num}
        </button>
        



        </div>
        
      </div>
      </form>
    </div>
    <Bottomfooter/>
    </>
  );
   
}

export default Signup