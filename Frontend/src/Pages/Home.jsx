import React from 'react'

import Hero from '../Components/Hero'
import Upload from '../Components/Upload'
import Features from '../Components/Features'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div className='bg-linear-to-b from-black to-[#3B006E]'>
      <Hero/>
      <Features/>
      <Upload/>
      <Footer/>
    </div>
  )
}

export default Home
