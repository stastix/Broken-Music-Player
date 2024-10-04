import Image from "next/image";
import React from "react";
import Button from "@/public/Spotify-Play-Button.png";

const PlayButton = () => {
  return (
    <div>
      <Image
        src={Button}
        height={56}
        width={56}
        alt="play button"
        // onClick={playAlbum}
      />
    </div>
  );
};

export default PlayButton;
