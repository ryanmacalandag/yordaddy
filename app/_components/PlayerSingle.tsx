'use client'

import Image from "next/image"
import { SongType } from "../_data/albums"

type PlayerSinglePropsType = {
  song: SongType;
}

export const PlayerSingle = ( props:PlayerSinglePropsType ) => {

  return (
    <>
      <div className="relative w-full aspect-square xl:aspect-square rounded-xl overflow-hidden">
        <Image
          src={props.song.albumartworkurl}
          alt='album cover'
          width={600}
          height={500}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
        ></Image>
        <audio src={props.song.fileurl} controls className="absolute bottom-0 left-0 z-10 w-full"/>
      </div>
      <div>
        <h2 className="text-md md:text-base">{props.song.title}</h2>
        <p className="text-xs uppercase opacity-45">{props.song.album}</p>
      </div>
    </>
  )
}
