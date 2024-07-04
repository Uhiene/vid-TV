import React from 'react'
import Layout from '../component/Layout/Layout'
import HeroSection from '../component/landingPage/HeroSection'
import HotNew from '../component/landingPage/HotNew'
import Subcription from '../component/landingPage/Subcription'

const LandingPage = () => {
  return (
    <Layout>
      <HeroSection/>
      <HotNew/>
      <Subcription/>
    </Layout>
  )
}

export default LandingPage