import React from 'react'
import { Link } from 'react-router-dom'
import {BiSolidMessageSquareDots} from "react-icons/bi"
import {BsFillChatFill} from "react-icons/bs"
import Topheader from '../components/Topheader'
import Ads from '../components/Ads'
import Homenews from '../components/Homenews'
import BottomFooter from '../components/Bottomfooter'
import contents from '../Fakedb'

function Home() {

  console.log(contents[0])
  return (
    <div className='home'>
      <Topheader/>

    <div className="bottom-header container">
      <div className="card my-box-shadow border-end-0 rounded-circle-3 rounded-bottom-3  border-start-0 ">
        <h6 className="text-center fs-2 card-header">NAIRALAND NIGERIA FORUM</h6>
        <h6 className="text-left card-header">
          <Link to="/">Nairaland&nbsp;/&nbsp;General:&nbsp;</Link><Link to="/">Politics,</Link><Link to="/crime">&nbsp;Crime,</Link>
          <Link to="/romance">&nbsp;Romance,</Link><Link to="/">&nbsp;Jobs/Vacancies,</Link><Link to="/career">&nbsp;Career,</Link>
          <Link to="/business">&nbsp;Business,</Link><Link to="/investment">&nbsp;Investment,</Link><Link to="/nysc">&nbsp;Nysc,</Link>
          <Link to="/eduaction">&nbsp;Education,</Link><Link to="/autos">&nbsp;Autos,</Link><Link to="/">&nbsp;Car Talk,</Link>
          <Link to="/properties">&nbsp;Properties,</Link><Link to="/health">&nbsp;Health,</Link><Link to="/travel">&nbsp;Travel,</Link>
          <Link to="/family">&nbsp;Family,</Link><Link to="/culture">&nbsp;Culture,</Link><Link to="/religion">&nbsp;Religion,</Link>
          <Link to="/food">&nbsp;Food,</Link><Link to="/diaries">&nbsp;Diaries,</Link><Link to="/">&nbsp;Nairaland Ads,</Link>
          <Link to="/pets">&nbsp;Pets,</Link><Link to="/agriculture">&nbsp;Agriculture</Link>
          </h6>
        <h6 className='text-left card-header '><Link to="/">Entertainment:&nbsp;</Link><Link to="/">Jokes/Etc,</Link><Link to="/">&nbsp;TV/Movies,</Link>
        <Link to="/">&nbsp;Music/Radio,</Link><Link to="/">&nbsp;Celebrities,</Link><Link to="/">&nbsp;Fashion,</Link><Link to="/">&nbsp;Events,</Link><Link to="/">&nbsp;Sports,</Link>
        <Link to="/">&nbsp;Gaming,</Link><Link to="/">&nbsp;Forum Games,</Link><Link to="/">&nbsp;Literature</Link>
        </h6>
        <h6 className="text-left  card-header">
          <Link to="/">Science/Technology:,&nbsp;</Link><Link to="/">&nbsp;Programming,</Link><Link to="/">&nbsp;Webmasters,</Link>
          <Link to="/">&nbsp;Computers,</Link><Link to="/">&nbsp;Phones,</Link><Link to="/">&nbsp;Art,&nbsp;Graphics&nbsp; & &nbsp;Video,</Link>
          <Link to="/">&nbsp;Technology Market</Link>
        </h6>

        

      </div>
    </div>

    <Ads/>
    <Homenews/>
    <Ads/>

    <div className="text-center my-box-shadow mb-3 rounded-2 py-2 naira-bg container">
    <h5>Members Online:</h5>
    <p>(<strong>2050 Members</strong> and <strong>8395 Guests</strong> online in <strong>last 5 minutes!</strong>)</p>
    </div>

    <h6 className='text-center mb-3'>(<Link to="/">Go Up</Link>)</h6>
    <BottomFooter/>


  
    
    </div> 
       
  )
}

export default Home