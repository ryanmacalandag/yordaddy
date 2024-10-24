import { PlayList } from "./_components/PlayList";

export default async function Home() {

  return (
    <div className="w-full h-full min-h-dvh flex justify-center items-center bg-gradient-to-t from-stone-300 via-stone-300 to-stone-200">
      <div className="w-full max-w-[500px] flex flex-col gap-6 px-4 py-12">
        <div>
          <p className="text-xl">Libreng Experimento</p>
        </div>
        <PlayList></PlayList>
      </div>
    </div>
  );
}
