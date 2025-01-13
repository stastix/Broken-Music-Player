import Image from "next/image";
import React from "react";
import albumImage from "../../../../public/Hot-fuss.png";
import { fetchSingleAlbum } from "../../../server/sing-album-server";
import theKillers from "@/public/ab6761610000e5eb207b21f3ed0ee96adce3166a.jpeg";
import PlayButton from "@/app/(components)/playButton";
import Songs from "../../../(components)/Songs";

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
        <ul className="text-lg mb-2 mt-12 flex items-center justify-between">
          <li className="mr-4">#</li>
          <li>Title</li>
          <li className="ml-auto mr-4">
            <i className="fa-solid fa-clock"></i>
          </li>
        </ul>
        <Songs songs={album?.songs} />
      </div>
    </>
  );
};

export default AlbumDetails;
