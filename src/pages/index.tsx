import Technologies from '../components/Technologies';

export default function Home() {
  return (
    <>
      <div className="px-4 container min-h-screen mx-auto sm:px-6 lg:px-8">
        <main className="flex flex-col items-center">
          <Technologies />
        </main>
      </div>
    </>
  );
}
