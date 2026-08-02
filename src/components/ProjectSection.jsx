import { ArrowRight, ExternalLink, GitBranchPlusIcon } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id:1, 
        title: "NicheGaming",
        description: "NicheGaming é um projeto de marktplace construído em Flutter/Dart para mobile",
        image: "./projects/logo.png",
        tags: ["Flutter", "Firebase", "Mobile"],
        githunUrl: "https://github.com/davedev14/NicheGaming"
    },
    {
        id:2, 
        title: "Fitness-App",
        description: "Fitness-App é um projeto em React para facilitar sua forma de exercitar em casa ou na academia",
        image: "./projects/fitness.png",
        tags: ["React", "RapidAPI"],
        githunUrl: "https://github.com/davedev14/Fitness-app"
    },
    {
        id:3, 
        title: "Tech Logo",
        description: "Tech Logo é uma página web feita com ferramentas básicos de desenvolvimento",
        image: "./projects/html.png",
        tags: ["HTML", "CSS", "Javascript"],
        githunUrl: "https://github.com/davedev14"
    },
]

const ProjectSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                {""}
                Apresentação <span className='text-primary'>Projetos</span>
            </h2>

            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Aqui estão alguns dos projetos mais recentes. Cada projeto foi criado com atenção 
                aos detalhes e sempre em busca de resover algum problema do usuário.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, key) => (
                    <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:hover-110' />
                        </div>

                        <div className='p-6'>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.tags.map((tag) => (
                                    <span className='px-2.5 py-1 text-xs font-semibold rounded-full border border-primary/40 bg-primary/10 text-primary transition-colors'>{tag}</span>
                                ))}
                            </div>
                        

                        <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                        <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-3'>
                                <a 
                                href={project.githunUrl} 
                                target='_blank'
                                className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                    <ExternalLink size={22}/>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>

                ))}
            </div>

            <div className='text-center mt-12'>
                <a 
                className='cosmic-button w-fit flex items-center mx-auto gap-2'
                target='_blank' 
                href="https://github.com/davedev14">
                    Veja meu GitHub <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection