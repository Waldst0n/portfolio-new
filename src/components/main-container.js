import CardProfiler from './card-profile';
import MainContent from './main-content';

export default function MainContainer() {
  return (
    <>
      <main className=" flex items-start  justify-start px-16  w-full">
        <div className="flex fixed ">
          <CardProfiler />
        </div>
        <MainContent />
      </main>
    </>
  );
}
