import React from 'react'
import AboutMobile from './components/AboutMobile'
import Achievements from './components/Achievements'
import AchMobile from './components/AchMobile'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Contact from './components/Contact'
import About from './desktop/About'
import Particle from './Particle'

const MobileView = () => {
    return (
        <>
            <Particle />
            <Nav />
            <Hero />
            <AboutMobile />
            <AchMobile />
            <Contact />

        </>
    )
}

export default MobileView