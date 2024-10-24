import React from 'react'
import { librengexperimento } from '@/app/_data/playlists'
import { PlayerSingle } from '@/app/_components/PlayerSingle';
import Link from 'next/link';
import { RiHomeLine, RiPlayListLine } from 'react-icons/ri';

export async function generateStaticParams() {
  return librengexperimento.songs.map((s) => ({
    slug: s.slug,
  }))
}

export default async function Page( { params }: { params: {slug:string }}  ) {
  const { slug } = await params;
  const song = await librengexperimento.songs.find((s) => s.slug == slug);

  return (
    <div className="w-full h-full min-h-dvh flex justify-center items-center bg-gradient-to-t from-stone-400 via-stone-200 to-stone-200">
      <div className="w-full max-w-[440px] flex flex-col gap-6 px-4 py-12">
        <div className='flex justify-between items-center'>
          <Link
            href='/'
          >
            <RiHomeLine size={24}></RiHomeLine>
          </Link>
          <h1 className="text-xl">{librengexperimento.name}</h1>
          <RiPlayListLine size={24}></RiPlayListLine>
        </div>
        <PlayerSingle song={song!}></PlayerSingle>
      </div>
    </div>
  )
}
