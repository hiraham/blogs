import React from 'react'
import Navbar from '@/components/Navbar'
import AutherCard from '@/components/AutherCard'

import Footer from '@/components/Footer'
import Feature from '@/components/Feature'
import Mega from '@/components/Mega'
const Home = () => {
  return (
    <div>
    <Navbar/>
    <Feature/>
    <Mega/>
    <AutherCard/>
  
    <Footer/>

    </div>
  )
}

export default Home;
