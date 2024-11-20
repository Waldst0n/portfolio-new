export default function MainContent() {
  return (
    <div className="ml-8 flex flex-col p-2 items-center max-w-[696px] ">
      <h1 className="text-[70px] font-extrabold leading-none">
        DESENVOLVEDOR <span className="text-gray">FULLSTACK</span>{' '}
      </h1>
      <p className="text-xl mt-8 ">
        Sou um desenvolvedor FullStack apaixonado por criar soluções escaláveis
        e de alto desempenho. Tenho sólida experiência em React e Node.js, além
        de conhecimentos em bancos de dados SQL e NoSQL, e arquitetura de
        microsserviços. Trabalho com metodologias ágeis e possuo forte
        capacidade de colaborar de forma eficiente em equipes dinâmicas.
      </p>
      <div className="flex w-full gap-16">
        <div className="w-24 mt-12 ">
          <h3 className="text-6xl font-bold">+2</h3>
          <p>Anos de experiência</p>
        </div>
        <div className="w-24 mt-12">
          <h3 className="text-6xl font-bold">+40</h3>
          <p>Projetos no github</p>
        </div>
      </div>
    </div>
  );
}
