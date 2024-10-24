import Player from "./_components/Player";

export default async function Home() {

  return (
    <div className="w-full h-full min-h-dvh flex justify-center items-center">
      <div className="w-full max-w-screen-xl flex flex-col gap-6 px-4 py-12">
        <div>
          <h1 className="text-5xl">Yordaddy</h1>
          <p className="text-xl">Libreng Experimento</p>
        </div>
        <Player></Player>
      </div>
    </div>
  );
}
