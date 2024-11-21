import CardProfiler from './card-profile';
import MainContent from './main-content';

export default function MainContainer() {
  return (
    <main className="flex flex-col lg:flex-row items-start justify-between w-full gap-8 px-4 md:px-16">
      {/* CardProfiler */}
      <div className="flex-grow w-full  lg:w-2/4">
        <CardProfiler />
      </div>

      {/* MainContent */}
      <div className="flex-grow w-full md:w-2/3 lg:w-3/4">
        <MainContent />
      </div>
    </main>
  );
}
