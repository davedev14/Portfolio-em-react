import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      {" "}
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          Sobre <span className='text-primary'> Mim</span>
        </h2>
      </div>

        <div className='space-y-6 max-w-2xl mx-auto'>
          <h3 className='text-2xl font-semibold'>
            Desenvolvedor Web & Estudante do Ensino Médio
          </h3>
          <p className='text-muted-foreground leading-relaxed'>
            Desenvolvendo projetos modernos, responsivos e focados na experiência do usuário. 
            Em constante aprendizado para transformar código em soluções digitais 
            eficientes e prontas para o mercado.
          </p>
          <p className='text-muted-foreground leading-relaxed'>
            No curso técnico de DDS estudamos tecnologias como Python 3,
            Java SpringBoot, Flutter dart, Figma, PostgreSQL. Além de 
            melhoria de código e Hardware.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
          <a href="#contact" className='cosmic-button'>
            {" "}
            Entre em Contato
          </a>

          <a href="#contact" className='px-6 py-2 rounded-full border border-primary text-primary hovwe:bg-primary/10 transition-color durations-300'>
            {" "}
            Download CV
          </a>
        </div>

    </section>
  )
}

export default AboutSection