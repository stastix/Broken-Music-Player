"use server";

import prisma from "@/app/lib/db";

export const fetchSingleAlbum = async (id: string) => {
  const album = await prisma.album.findUnique({
    where: { albumId: id },
    include: { songs: true, artist: true },
  }); 

  return album;
};
