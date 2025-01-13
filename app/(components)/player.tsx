"use client";
import Image from "next/image";
import albumCover from "../../public/Hot-fuss.png";
import Duration from "./duration";
import { Song } from "@prisma/client";

const MusicPlayer = ({
  currentSong,
  playTime,
}: {
  currentSong: Song | null;
  playTime: number;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-4 rounded-lg shadow-lg fixed left-0 bottom-0 right-0 space-y-4 md:space-y-0">
      {/* Left Section */}
      <div className="flex items-center">
        <Image
          src={albumCover}
          alt="Album Cover"
          className="w-12 h-12 object-cover rounded-lg mr-4"
        />
        <div className="flex flex-col">
          <span className="text-base md:text-lg font-bold">{"Death"}</span>
          <span className="text-xs md:text-sm opacity-70">{"The Killers"}</span>
        </div>
        <i className="fa-solid fa-circle-plus ml-4 md:ml-7 transition-transform transform hover:scale-110 text-slate-400"></i>
      </div>

      {/* Center Section */}
      <div className="flex flex-col items-center justify-center relative rounded-full w-full md:w-auto">
        <div className="flex flex-row space-x-6 md:space-x-12">
          <button className="transition-transform transform hover:scale-110">
            <i className="fa-solid fa-shuffle text-lg md:text-xl"></i>
          </button>
          <button className="transition-transform transform hover:scale-110">
            <i className="fa-solid fa-backward-step text-xl md:text-2xl"></i>
          </button>
          <button className="transition-transform transform hover:scale-110">
            <i className="fa-solid fa-circle-play text-2xl md:text-3xl"></i>
          </button>
          <button className="transition-transform transform hover:scale-110">
            <i className="fa-solid fa-forward-step text-xl md:text-2xl"></i>
          </button>
          <button className="transition-transform transform hover:scale-110">
            <i className="fa-solid fa-repeat text-lg"></i>
          </button>
        </div>
        <div className="flex flex-row items-center w-full">
          <div className="relative w-full md:w-96 h-1 mt-2 mr-4">
            <div className="absolute w-full h-1 bg-gray-700"></div>
            <div
              className="absolute h-1 bg-white rounded-full"
              style={{ width: `${(120 / 480) * 100}%` }}
            ></div>
          </div>
          <Duration duration={480} />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center w-full md:w-auto justify-between md:justify-end">
        <button className="bg-transparent text-white text-base md:text-lg transition-transform transform hover:scale-110 ">
          <i className="fas fa-volume-up"></i>
        </button>
        <div className="relative w-full md:w-24 h-1 ml-2">
          <div className="absolute w-full h-1 bg-gray-700 rounded-full"></div>
          <div className="absolute w-1/2 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
