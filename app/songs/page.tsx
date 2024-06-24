import React from "react";
import { songs } from "../data/data";
import Link from "next/link";
import prisma from "../lib/db";

const SongsPage = async () => {
  const albums = await prisma.album.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      songs: true,
    },
  });

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {albums.map((album) => (
          <Link
            key={album.albumId}
            href={`/songs/${album.albumId}`}
            className="bg-white p-4 rounded-md shadow-md "
          >
            <h4 className="font-bold mb-4">Album</h4>

            <h2 className="text-xl font-bold"> {album.title}</h2>
            <h4 className="font-bold mb-4">Songs</h4>
            <ul className="mt-2">
              {album.songs.slice(0, 3).map((song) => (
                <li key={song.songId} className="text-gray-700">
                  {song.title}
                </li>
              ))}
              {album.songs.length > 3 && (
                <li className="text-blue-500">...and more</li>
              )}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SongsPage;
