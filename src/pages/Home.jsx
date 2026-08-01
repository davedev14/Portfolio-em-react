import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'

const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* tema do toggle  */}
        <ThemeToggle/>

        {/* backgroounds effects */}
        <StarBackground/>

        {/* Navbar */}
        <Navbar/>

        {/* conteudo principal */}
        <main>
          <HeroSection/>
          <AboutSection/>
          <SkillsSection/>
        </main>
        {/* footer */}
    </div>
  )
}

export default Home