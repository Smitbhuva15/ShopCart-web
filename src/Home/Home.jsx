import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShow from './CategoryShow.JSX'
import Resister from './Resister'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponser from './Sponser'

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShow />
      <Resister />
      <LocationSprade />
      <AboutUs />
      <AppSection />
      <Sponser />
    </div>
  )
}

export default Home