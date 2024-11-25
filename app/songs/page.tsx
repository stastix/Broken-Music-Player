import React from "react";
import Image from "next/image";
import Link from "next/link";
import albumPicture from "../../public/Hot-fuss.png";
import { getAlbums } from "./albums.server";

const Albums = async () => {
  const albums = await getAlbums();
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {albums.map((album) => (
          <Link
            key={album.albumId}
            href={{
              query: { album: JSON.stringify(album) },
              pathname: `/songs/${album.albumId}`,
            }}
            className="bg-slate-950  hover:bg-slate-900 p-4 rounded-md shadow-md "
          >
            <Image
              height={238}
              width={238}
              src={albumPicture}
              alt={album.title}
            ></Image>
            <h2 className="text-xl font-bold"> {album.title}</h2>
            <h4 className="font-bold mb-4">Songs</h4>
            <ul className="mt-2">
              {album.songs.slice(0, 3).map((song) => (
                <li key={song.songId} className="text-gray-700">
                  {song.title}
                </li>
              ))}
              {album.songs.length >= 3 && (
                <li className="text-blue-500">...and more</li>
              )}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Albums;
