import { useState } from "react";
export const useAlbum = () => {
  const [HoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const selectSong = (index: number) => {
    setHoveredIndex(index);
  };
  const unselectSong = () => {
    setHoveredIndex(null);
  };
  return { selectSong, unselectSong, HoveredIndex };
};
