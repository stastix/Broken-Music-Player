import Comments from "@/app/components/comments";
import FormComments from "@/app/components/form-comments";
import FormNewSong from "@/app/components/form-new-song";
import prisma from "@/app/lib/db";
import React, { FC } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface AlbumDetailPageProps {
  params: {
    id: string;
  };
}

const SongDetail: FC<AlbumDetailPageProps> = async ({ params }) => {
  const album = await prisma.album.findFirst({
    where: {
      albumId: params.id,
    },
    include: {
      songs: true,
    },
  });
  const playSong = (songId: string) => {};

  return (
    <>
      <div className="max-w-4xl mx-auto py-8">
        <i className="fas fa-play mr-2 text-blue-500 cursor-pointer"></i>

        <h1 className="text-3xl font-bold mb-4">{album?.title}</h1>
        <h4 className="text-2xl font-semibold mb-4">Songs</h4>
        <ul className="list-disc list-inside mb-8">
          {album?.songs.map((song) => (
            <li
              key={song.songId}
              className="text-lg text-gray-700 mb-2 flex items-center"
            >
              <i
                className="fas fa-play mr-2 text-blue-500 cursor-pointer"
                /*                 onClick={playSong(song.songId)}
                 */
              ></i>

              {song.title}
            </li>
          ))}
        </ul>
        <FormComments albumId={params.id} />

        <Comments albumId={params.id} />
      </div>
    </>
  );
};

export default SongDetail;
