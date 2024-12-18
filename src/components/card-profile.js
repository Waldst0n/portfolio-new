import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export default function CardProfiler() {
  return (
    <div className=" flex   overflow-hidden relative flex-col flex-nowrap items-center  pt-8 w-full h-full p-4 gap-4   md:w-full md:h-250px lg:h-[550px] bg-white rounded-2xl">
      <div className="flex     flex-col items-center ">
        <Image
          src="/Ellipse1.png"
          width={200}
          height={200}
          className="absolute flex cover -top-10 -left-24 "
          alt="elipse "
        />

        <Image
          src="/perfil-Photoroom.jpg"
          width={240}
          height={240}
          className="rounded-[50%] w-[100px] h-[100px]"
          alt="Dev Photos"
        />
      </div>
      <div className="flex flex-col w-full h-full items-center justify-around">
        <h2 className="text-black md:text-[28px] text-center font-bold">
          WALDSTON SANTANA
        </h2>
        <p className="text-gray text-center pt-8 text-xl  ">
          Desenvolvedor Fullstack apaixonado por inovação e tecnologia.{' '}
        </p>
        <div className="flex gap-8 mt-8">
          <Link
            href="https://api.whatsapp.com/send/?phone=%2B5579988232693&text=Ol%C3%A1%21+Tudo+bem%3F&type=phone_number&app_absent=0"
            className="text-blue-300 text-3xl transition-all hover:text-blue-600"
            target="_blank"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href="https://www.instagram.com/waldstonsantana/"
            className="text-blue-300 text-3xl transition-all hover:text-blue-600"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/in/waldston-santana/"
            className="text-blue-300 text-3xl transition-all hover:text-blue-600"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/waldst0n"
            className="text-blue-300 text-3xl transition-all hover:text-blue-600"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}
