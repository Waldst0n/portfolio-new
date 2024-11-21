export default function MainContent() {
  return (
    <div className="flex flex-col items-start w-full">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
        DESENVOLVEDOR <span className="text-gray">FULLSTACK</span>
      </h1>
      <p className="text-lg md:text-xl mt-6">
        Sou um desenvolvedor FullStack apaixonado por criar soluções escaláveis
        e de alto desempenho. Tenho sólida experiência em React e Node.js, além
        de conhecimentos em bancos de dados SQL e NoSQL, e arquitetura de
        microsserviços. Trabalho com metodologias ágeis e possuo forte
        capacidade de colaborar de forma eficiente em equipes dinâmicas.
      </p>
      <div className="flex gap-8 mt-8">
        <div>
          <h3 className="text-4xl font-bold">+2</h3>
          <p>Anos de experiência</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">+40</h3>
          <p>Projetos no GitHub</p>
        </div>
      </div>
    </div>
  );
}
