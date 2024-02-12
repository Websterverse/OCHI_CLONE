import React from 'react'
import NAVBAR from './component/NAVBAR'
import LANDING from './component/LANDING'
import Marquee from './component/Marquee'
import About from './component/About'
import Eye from './component/Eye'
import Featurd from './component/Featurd'
import CLIENT from './component/CLIENT'
import Cards from './component/Cards'
import IYE from './component/IYE'
import Footer from './component/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();
  
  return (


<div className='w-full   text-white  min-h-screen bg-zinc-900 '  >
<NAVBAR/>
<LANDING/>
<Marquee/>
<About/>
<Eye/>
<Featurd/>
<CLIENT/>
<Cards/>
<IYE/>
<Footer/>
    </div>
  )
}

export default App
