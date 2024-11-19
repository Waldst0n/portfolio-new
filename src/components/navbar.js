import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around gap-2 w-[1260px] h-[70px]">
      <div>
        <h1 className="text-[1.2rem]">Waldston Santana</h1>
      </div>
      <div className="flex gap-16">
        <Link
          className="font-bold transition-all  hover:text-orange hover:scale-125"
          href="#"
        >
          Home
        </Link>
        <Link
          className="font-bold transition-all  hover:text-orange hover:scale-125"
          href="#"
        >
          About
        </Link>
        <Link
          className="font-bold transition-all  hover:text-orange hover:scale-125"
          href="#"
        >
          Currículo
        </Link>
      </div>
    </nav>
  );
}
