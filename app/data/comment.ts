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
  try {
    const newComment = await prisma.comment.create({
      data: {
        text: content,
        album: {
          connect: { albumId: albumID },
        },
      },
    });
    revalidatePath(`/songs/${albumID}`);
    return newComment;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};
