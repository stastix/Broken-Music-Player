"use client";
import React from "react";
import { useAlbum } from "../custom-hooks/album.hook";
import { Song } from "@prisma/client";
import Duration from "@/app/(components)/duration";

const Songs = ({ songs }: { songs: Song[] | undefined }) => {
  const { selectSong, unselectSong, HoveredIndex } = useAlbum();
  const playSong = (song: Song) => {};

  return (
    <>
      {songs && (
        <ul>
          {songs.map((song, index) => (
            <li
              key={song.songId}
              className={`flex items-center justify-between text-lg mb-4 transition-all duration-300 ease-in-out ${
                index === HoveredIndex
                  ? "bg-slate-900 text-white "
                  : "text-slate-300"
              }`}
              onMouseEnter={() => selectSong(index)}
              onMouseLeave={() => unselectSong()}
            >
              <div className="mr-5">
                {index === HoveredIndex ? (
                  <button
                    className="hover:scale-110 transition-transform"
                    onClick={() => playSong(song)}
                  >
                    <i className="fas fa-play text-slate-600 cursor-pointer"></i>
                  </button>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span className="text-slate-400">{song.title}</span>
              <div className="ml-auto">
                <Duration duration={song.duration} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Songs;
