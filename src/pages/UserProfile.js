import React from 'react'
import Topheader from '../components/Topheader'
import Bottomfooter from '../components/Bottomfooter'
import { Link } from 'react-router-dom'


function UserProfile() {
  return (
    <div>
        <Topheader/>
        <h1 className="text-center">Daniel's Profile</h1>
        <h6 className='text-center mb-3'><Link className='fww-normal' to={"/"}>Nairaland forum</Link>/<Link className='fww-normal'>Daniel's Profile</Link></h6>
        <Bottomfooter/>
    </div>
  )
}

export default UserProfile