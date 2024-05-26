import React from 'react'
import Offers from '../Components/Offers/Offers'
import Popular from '../Components/Popular/Popular'
import Hero from '../Components/Hero/Hero'
import { Carousel } from '../Components/Carousel'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Popular/>
      <Offers/>
    </div>
  )
}

export default Home
