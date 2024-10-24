export type SongType = {
  id: string;
  title: string;
  slug: string;
  year: string;
  artist: string;
  fileurl: string;
  artworkurl: string;
}

export type PlaylistType = {
  name: string;
  slug: string;
  artist: string;
  year: string;
  studio: string;
  playlistartworkurl: string;
  songs: SongType[];
}

export const librengexperimento:PlaylistType = {
  name: 'Libreng Experimento',
  slug: 'libreng-experimento',
  artist: 'Yordaddy',
  year: '2009',
  studio: 'SoundGarage Recording Studio',
  playlistartworkurl: '/albums/libreng-experimento/yordaddy-artwork.jpg',
  songs:
  [
    {
      id: '0101',
      title: 'Maglipay',
      slug: 'maglipay',
      year: '2009',
      artist: 'Yordaddy',
      fileurl: '/albums/libreng-experimento/01-yordaddy-maglipay.mp3',
      artworkurl: '/albums/libreng-experimento/yordaddy-artwork-01.jpg',
    },
    {
      id: '0102',
      title: 'Sala Ba Diay',
      slug: 'sala-ba-diay',
      year: '2009',
      artist: 'Yordaddy',
      fileurl: '/albums/libreng-experimento/02-yordaddy-sala-ba-diay.mp3',
      artworkurl: '/albums/libreng-experimento/yordaddy-artwork-02.jpg',
    },
    {
      id: '0103',
      title: 'Sinelas',
      slug: 'sinelas',
      year: '2009',
      artist: 'Yordaddy',
      fileurl: '/albums/libreng-experimento/03-yordaddy-sinelas.mp3',
      artworkurl: '/albums/libreng-experimento/yordaddy-artwork-03.jpg',
    },
    {
      id: '0104',
      title: 'Naytlayp Ni Batman',
      slug: 'naytlayp-ni-batman',
      year: '2009',
      artist: 'Yordaddy',
      fileurl: '/albums/libreng-experimento/04-yordaddy-naytlap-ni-batman.mp3',
      artworkurl: '/albums/libreng-experimento/yordaddy-artwork-04.jpg',
    },
    {
      id: '0105',
      title: 'I Love My Teacher',
      slug: 'i-love-my-teacher',
      year: '2009',
      artist: 'Yordaddy',
      fileurl: '/albums/libreng-experimento/05-yordaddy-i-love-my-teacher.mp3',
      artworkurl: '/albums/libreng-experimento/yordaddy-artwork-05.jpg',
    },
    {
      id: '0106',
      title: 'Kina Nihitan',
      slug: 'kina-nihitan',
      year: '2009',
      artist: 'Yordaddy',
      fileurl: '/albums/libreng-experimento/06-yordaddy-kina-nihitan.mp3',
      artworkurl: '/albums/libreng-experimento/yordaddy-artwork-06.jpg',
    },
    {
      id: '0107',
      title: 'Asa Na',
      slug: 'asa-na',
      year: '2009',
      artist: 'Yordaddy',
      fileurl: '/albums/libreng-experimento/07-yordaddy-asa-na.mp3',
      artworkurl: '/albums/libreng-experimento/yordaddy-artwork-07.jpg',
    },
    {
      id: '0108',
      title: 'Laay Blues',
      slug: 'laay-blues',
      year: '2009',
      artist: 'Yordaddy',
      fileurl: '/albums/libreng-experimento/08-yordaddy-laay-blues.mp3',
      artworkurl: '/albums/libreng-experimento/yordaddy-artwork-08.jpg',
    },
    {
      id: '0109',
      title: 'Karnero',
      slug: 'karnero',
      year: '2009',
      artist: 'Yordaddy',
      fileurl: '/albums/libreng-experimento/09-yordaddy-karnero.mp3',
      artworkurl: '/albums/libreng-experimento/yordaddy-artwork-09.jpg',
    },
    {
      id: '0110',
      title: 'Nihit',
      slug: 'nihit',
      year: '2009',
      artist: 'Yordaddy',
      fileurl: '/albums/libreng-experimento/10-yordaddy-nihit.mp3',
      artworkurl: '/albums/libreng-experimento/yordaddy-artwork-10.jpg',
    },
    {
      id: '0111',
      title: 'Angelie',
      slug: 'angelie',
      year: '2009',
      artist: 'Yordaddy',
      fileurl: '/albums/libreng-experimento/10-yordaddy-nihit.mp3',
      artworkurl: '/albums/libreng-experimento/yordaddy-artwork-11.jpg',
    },
    {
      id: '0112',
      title: 'Unsaon Na Lang',
      slug: 'unsaon-na-lang',
      year: '2009',
      artist: 'Yordaddy',
      fileurl: '/albums/libreng-experimento/12-yordaddy-unsaon-na-lang.mp3',
      artworkurl: '/albums/libreng-experimento/yordaddy-artwork-12.jpg',
    },
  ],
}