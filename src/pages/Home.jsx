import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'


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
          <ProjectSection/>
        </main>
        
        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Home