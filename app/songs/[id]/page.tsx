"use server";
import Comments from "@/app/(components)/comments";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { fetchSingleAlbum } from "./sing-album-server";
import albumImage from "../../../public/Hot-fuss.png";
import theKillers from "@/public/ab6761610000e5eb207b21f3ed0ee96adce3166a.jpeg";
import Image from "next/image";
import PlayButton from "@/app/(components)/playButton";

const AlbumDetails = async ({ params }: { params: any }) => {
  const album = await fetchSingleAlbum(params.id);
  return (
    <>
      <div className="max-w-4xl mx-auto py-8 flex border-b-2 border-slate-700">
        <Image
          width={180}
          height={180}
          alt={`${album?.title} cover`}
          src={albumImage}
        ></Image>
        <div className="flex-1">
          <h6 className="text-sm mx-6 ">Album</h6>
          <h1 className="text-3xl font-bold mb-4 m-4 mx-5">{album?.title}</h1>
          <div className="mx-3 p-3 my-auto flex">
            <Image
              src={theKillers}
              height={40}
              width={40}
              className="rounded-full"
              alt="the killers image"
            ></Image>
            <h6 className="text-sm m-3 hover:underline ">
              {album?.artist?.name}
            </h6>
            <h6 className="text-sm my-3">{album?.createdAt.getFullYear()}</h6>
            <h6 className="text-sm my-3 mx-3">{album?.songs.length} songs</h6>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-8">
        <PlayButton />
        <h4 className="text-clip font-semibold mb-4 mt-10">Songs</h4>
        <ul className="list-disc list-inside mb-8">
          {album?.songs.map((song) => (
            <li
              key={song.songId}
              className="text-lg text-slate-300 mb-2 flex items-center"
            >
              <i
                className="fas fa-play mr-2 text-slate-500 cursor-pointer"
                // onClick={playSong(song.songId)}
              ></i>
              {song.title}
            </li>
          ))}
        </ul>
        <Comments albumId={params.id} />
      </div>
    </>
  );
};
export default AlbumDetails;
