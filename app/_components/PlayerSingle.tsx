'use client'

import Image from "next/image"
import { SongType } from "../_data/playlists"
import { librengexperimento } from "../_data/playlists"

type PlayerSinglePropsType = {
  song: SongType;
}

export const PlayerSingle = ( {song}:PlayerSinglePropsType ) => {

  return (
    <>
      <div className="relative w-full aspect-square xl:aspect-square rounded-xl overflow-hidden">
        <Image
          src={song.artworkurl}
          alt={song.title}
          width={600}
          height={500}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
        ></Image>
        <audio src={song.fileurl!} controls className="absolute bottom-0 left-0 z-10 w-full"/>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{song.title}</h2>
        <p className="text-xs uppercase opacity-65">{librengexperimento.artist}</p>
      </div>
    </>
  )
}
