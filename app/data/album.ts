"use server";
import prisma from "../lib/db";
const getRandomLength = () => {
  const min = 3;
  const max = 7;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const createAlbum = async ({
  title,
  songs,
}: {
  title: string;
  songs: string[];
}) => {
  const newAlbum = await prisma.album.create({
    data: {
      title,
      songs: {
        createMany: {
          data: songs.map((song) => ({
            title: song,
            length: getRandomLength(),
          })),
        },
      },
    },
    include: {
      songs: true,
    },
  });

  return newAlbum;
};
