import React from 'react'
import NvDesktop from './desktop/NvDesktop'
import HeroDesktop from './desktop/HeroDesktop'
import About from './desktop/About'
import Achievements from './components/Achievements'
import Particle from './Particle'
import Contact from './components/Contact'

const DesktopView = () => {
    return (
        <>
        <Particle />
        <NvDesktop />
        
        <HeroDesktop />
        <About />
        <Achievements />
        <Contact />
        </>
    )
}

export default DesktopView