import React from 'react'
import { useParams } from 'react-router-dom'
import contents from '../Fakedb';
import Topheader from '../components/Topheader';
import Ads from '../components/Ads';
import {Link} from 'react-router-dom'
import Bottomfooter from '../components/Bottomfooter';

function Details
() {

    const {id} = useParams();


    const info = contents.find((a => a?.id ==id))
  return (
    
    <>
        
        <Topheader />
        <h1 className='text-center container '>{info?.title}</h1>
        <Ads/>
        
       <div className="card mb-4 container naira-bg ">
        <div className="card-header">
          <p><Link to={`/details/${info.id}`}>{info.title}</Link> by <Link className='user-link' to="">tensazangetsu20</Link>(<Link>m</Link>): 10:48am On Oct 02, 2022 </p>
          
          </div>
          <div className="card-header">
          <div>{info?.description}</div>
        <img className='card-img-top w-25 h-25 ' src={info?.images}/>
          </div>
  
        </div> 
      
      <Ads/>
      <Bottomfooter/>
      
        {/* reactQuill */}
    </>
  )
}

export default Details
