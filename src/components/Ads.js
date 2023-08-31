import React from 'react'
import { Link } from 'react-router-dom'

function Ads() {
  return (
    <div className='d-flex my-3 gap-2 justify-content-center container '>
        <Link className=' '><div className='  card my-box-shadow'>
            <img src="./../ads.png" alt="" className=" card-img-top img-fluid ads-img" />
        </div></Link>
        <Link className=' '> <div className=' card my-box-shadow'>
            <img src="./../ads.png" alt="" className=" card-img-top img-fluid ads-img" />
        </div></Link>
        <Link className=''><div className='  card my-box-shadow'>
            <img src="./../ads.png" alt="" className=" card-img-top img-fluid ads-img" />
        </div></Link>
    </div> 
  )
}

export default Ads