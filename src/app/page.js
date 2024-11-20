import MainContainer from '@/components/main-container';
import Navbar from '@/components/navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex m-auto  w-[1140px] flex-col  mb-16 justify-center items-center">
        <Navbar />
        <MainContainer />
      </div>
    </>
  );
}
