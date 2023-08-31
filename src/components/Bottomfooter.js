import React from 'react'
import { Link}  from 'react-router-dom'
import Bottomlinks from './Bottomlinks'

function Bottomfooter() {
  return (
    <div className='container h-25  my-box-shadow mb-3 p-4 naira-bg rounded-4'>
          <div className="mb-3 container w-75 gap-2 d-flex">
          <input type="text"
            className="form-control rounded-5 " name="" id="" aria-describedby="helpId" placeholder=""/>
            <button type="button" className="btn btn-light border-black  rounded-5">search</button>
        </div>
        <Bottomlinks/>
        <h6 className="text-center"> 
        <Link>Nairaland</Link>
        - Copyright © 2005 - 2023 <Link>Oluwaseun Osewa.</Link> All rights reserved. See <Link>How To Advertise.</Link> 2
        </h6>
        <h6 className="text-center">
        <strong>Disclaimer:</strong> Every Nairaland member is<strong>&nbsp;solely responsible</strong> for anything that he/she <strong>posts</strong> or <strong>uploads</strong> on Nairaland.
        </h6>
    </div>
  )
}

export default Bottomfooter