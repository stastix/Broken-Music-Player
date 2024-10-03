"use server";

import prisma from "../lib/db";

const getAlbums = async () => {
  const albums = await prisma.album.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      songs: true,
    },
  });
  return albums;
};
export { getAlbums };
