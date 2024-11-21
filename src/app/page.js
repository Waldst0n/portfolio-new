import MainContainer from '@/components/main-container';
import MainContent from '@/components/main-content';
import Navbar from '@/components/navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto max-w-[1140px] p-4 md:p-6 lg:p-8 mb-16">
        <Navbar />
        <div className="w-full  animate-fadeIn">
          <MainContainer />
        </div>
      </div>
    </>
  );
}
