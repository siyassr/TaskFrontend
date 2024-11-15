import React, { Suspense } from 'react'
import RightBar from '../SlideBar/RightBar'
import Hero from '../Hero/Hero'

import LeftBar from '../SlideBar/LeftBar'
// const Hero = React.lazy(() => import("../Home/Home.jsx")); // Update path as needed
// const LoadingSpinner = () => <div>Loading...</div>;

function Home() {
  
  return (
    <div className='flex '>
       
        <LeftBar/>
        {/* <Suspense fallback={<LoadingSpinner/>}> */}
        <Hero/>
        {/* </Suspense> */}
        
        <RightBar/>
    </div>
  )
}

export default Home