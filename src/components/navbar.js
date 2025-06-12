import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center px-16 mb-16 justify-center gap-2 w-full h-[70px]">
      <div className="flex gap-8 md:gap-16">
        <Link
          className="font-bold transition-all  hover:text-blue-300 hover:scale-125"
          href="/"
        >
          Início
        </Link>
        <Link
          className="font-bold transition-all  hover:text-blue-300 hover:scale-125"
          href="/projects"
        >
          Projetos
        </Link>
        <Link
          className="font-bold transition-all  hover:text-blue-300 hover:scale-125"
          href="https://drive.google.com/file/d/12JaTHGQEhzzewOr56MBFiTZuBjbMxB63/view?usp=sharing"
          target="_blank"
        >
          Currículo
        </Link>
      </div>
    </nav>
  );
}
