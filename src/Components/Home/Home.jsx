import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Packages from '../Packages/Packages'
import Awards from '../Awards/Awards'
import Footer from '../Footer/Footer'
import PlanYourTrip from '../PlanYourTrip/PlanYourTrip'
import Gallery from '../Gallery/Gallery'

const Home = () => {
  return (
    <>
      <Banner />
      <Awards />
      <Packages />
      <PlanYourTrip />
      <Gallery />
    </>
  )
}

export default Home