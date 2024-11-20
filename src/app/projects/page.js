import Navbar from '@/components/navbar';

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className=" flex items-center justify-center  px-16  max-w-[1140px]">
        <div className="w-full">
          <h1 className="text-[70px] text-center font-extrabold leading-none">
            MEUS <span className="text-gray">PROJETOS</span>{' '}
          </h1>
        </div>
        <div></div>
      </main>
    </>
  );
}
