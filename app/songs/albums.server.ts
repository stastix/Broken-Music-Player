"use server";

import prisma from "../lib/db";
import { Prisma } from "@prisma/client";

const getAlbums = async () => {
  const albums = await prisma.album.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      songs: { take: 3 },
      albumId: true,
      title: true,
    },
  });
  return albums;
};
export type AlbumWithDetails = Prisma.AlbumGetPayload<{
  select: {
    albumId: true;
    title: true;
    songs: true;
    artist: true;
  };
}>;
export { getAlbums };
