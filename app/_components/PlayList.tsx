import Link from "next/link";
import { librengexperimento } from "../_data/playlists";
import React from 'react'
import Image from "next/image";
import { RiPlayCircleLine } from "react-icons/ri";

export const PlayList = () => {

  const album = librengexperimento;
  const playlist = album.songs;

  return (
    <div className="flex flex-col gap-4">
      {
        playlist.map((song,key) => {
          return (
            <Link href={'/' + album.slug + '/' + song.slug} key={key} className="flex justify-between items-center gap-4 bg-stone-100 hover:bg-white hover:shadow-xl rounded-xl overflow-hidden transition duration-300">
              <div className="w-32 group flex flex-grow-0 aspect-square">
                <Image
                  src={song.artworkurl}
                  alt={song.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="w-full flex flex-col justify-start text-left">
                <h2 className="text-xl tracking-tight">{song.title}</h2>
                <p className="text-xs uppercase opacity-65">{song.artist}</p>
              </div>

              <div className="p-4">
                <RiPlayCircleLine size={20} className="group-hover:text-orange-900/30 transition duration-300"></RiPlayCircleLine>
              </div>
            
            </Link>
          )
        })
      }
    </div>
  )
}
