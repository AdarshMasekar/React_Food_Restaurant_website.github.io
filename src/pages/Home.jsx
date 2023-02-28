import React, { Fragment } from 'react'
import ChooseUS from '../components/choose-us/ChooseUS'
import Header from '../components/header/Header'
import HeroSlider from '../components/hero-slider/HeroSlider'
import PopularMenu from '../components/popular-menu/PopularMenu'
import MenuPack from '../components/menu-pack/MenuPack'
import Testimonial from '../components/testimonial/Testimonial'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <Fragment>
        <Header/>
        <HeroSlider/>
        <PopularMenu/>
        <ChooseUS/>
        <MenuPack/>
        <Testimonial/>
        <Footer/>
    </Fragment>
  )
}

export default Home
