import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* tema do toggle  */}
        <ThemeToggle/>

        {/* backgroounds effects */}
        <StarBackground/>

        {/* Navbar */}

        {/* conteudo principal */}

        {/* footer */}
    </div>
  )
}

export default Home