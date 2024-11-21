import MainContainer from '@/components/main-container';
import MainContent from '@/components/main-content';
import Navbar from '@/components/navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex m-auto   max-w-[1140px] flex-col  mb-16 justify-center items-center">
        <Navbar />
        <div className="flex p-2 animate-fadeIn">
          <MainContainer />
        </div>
      </div>
    </>
  );
}
