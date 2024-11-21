import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ image, title, description, link }) {
  return (
    <>
      <div className="  flex  flex-col p-4  mt-16 items-start text-gray justify-center rounded-lg gap-2 w-full h-auto transition-all hover:bg-gray hover:text-white">
        <div className="flex w-full items-center justify-between gap-16">
          <div className="  flex flex-col  p-4 gap-2">
            <div>
              <h3 className="text-3xl">{title}</h3>
              <p>{description}</p>
            </div>
            <Link
              className=" flex  items-center justify-center rounded-md bg-white text-gray w-32 transition-all hover:text-blue-500"
              href={link}
              target="_blank"
            >
              Acesse aqui
            </Link>
          </div>
          <div className="hidden md:flex">
            <Image
              src={image}
              width={80}
              height={80}
              alt="Images from projects"
            />
          </div>
        </div>
      </div>
    </>
  );
}
