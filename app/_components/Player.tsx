import { PlayerSingle } from "./PlayerSingle";
import { librengexperimento } from "../_data/albums";

export default async function Player() {

  const playlist = await librengexperimento;

  return (
    <div className="w-full grid grid-cols-12 gap-x-4 gap-y-4 md:gap-y-8">
      {
        playlist.map((s,key) => {
          return (
          <div key={key} className="group w-full col-span-6 md:col-span-4 xl:col-span-3 flex flex-col gap-1">
            <PlayerSingle song={s}></PlayerSingle>
          </div>
          )
        })
      }
    </div>
  );
}
