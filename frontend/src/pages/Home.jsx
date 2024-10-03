import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials'
import Features from '../components/Features'
import Footer from '../components/Footer'

function Home() {
    
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Features></Features>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  )
}

export default Home
