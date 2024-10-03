"use client";
import { Album, Prisma } from "@prisma/client";
import { useEffect, useState } from "react";
import { getAlbums } from "./albums.server";

export const useAlbums = () => {
  type albumWithSongs = Prisma.PromiseReturnType<typeof getAlbums>;
  const [Albums, setAlbums] = useState<albumWithSongs>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => setAlbumsData, []);
  const setAlbumsData = () => {
    setLoading(true);
    getAlbums()
      .then((data) => setAlbums(data))
      .finally(() => setLoading(false))
      .catch((error) => console.error(error));
  };

  return { Albums, loading};
};
