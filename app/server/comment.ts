"use server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";

export const createComment = async ({
  content,
  albumID,
}: {
  content: string;
  albumID: string;
}) => {
  const newComment = await prisma.comment
    .create({
      data: {
        text: content,
        album: {
          connect: { albumId: albumID },
        },
      },
    })
    .catch((error) => console.error(error));
  revalidatePath(`/songs/${albumID}`);
  return newComment;
};
