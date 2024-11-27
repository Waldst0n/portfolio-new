import Navbar from '@/components/navbar';
import ProjectCard from '@/components/project-card';

export default function Projects() {
  const projects = [
    {
      project1: {
        title: 'Okanban',
        description: 'Aplicação feita com React com base em um quadro Kanban.',
        image: '/okanban.png',
        link: 'https://o-kanban-waldst0ns-projects.vercel.app/',
      },
      project2: {
        title: 'Gerenciador de tarefas',
        description: 'Aplicação Fullstack criada com React e Express.',
        image: '/tasks.png',
        link: 'https://gerenciador-de-tarefas-front-flax.vercel.app/',
      },
      project3: {
        title: 'Formulário Multistep',
        description:
          'Aplicação criada com React e TypeScript de um formulário de passos com persistência de dados.',
        image: '/form.png',
        link: 'https://form-multistep-psi.vercel.app/',
      },
    },
  ];

  return (
    <>
      <div className="flex flex-col  items-center">
        <Navbar />
        <main className=" flex flex-col animate-fadeIn items-center justify-center  px-16  max-w-[1140px]">
          <div className="w-full">
            <h1 className="text-[70px] text-center font-extrabold leading-none">
              MEUS <span className="text-gray">PROJETOS</span>{' '}
            </h1>
            <ProjectCard
              title={projects[0].project1.title}
              description={projects[0].project1.description}
              image={projects[0].project1.image}
              link={projects[0].project1.link}
            />
            <ProjectCard
              title={projects[0].project2.title}
              description={projects[0].project2.description}
              image={projects[0].project2.image}
              link={projects[0].project2.link}
            />
            <ProjectCard
              title={projects[0].project3.title}
              description={projects[0].project3.description}
              image={projects[0].project3.image}
              link={projects[0].project3.link}
            />
          </div>
        </main>
      </div>
    </>
  );
}
