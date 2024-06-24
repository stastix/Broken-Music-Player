"use server";

import { symlink } from "fs";
import prisma from "../lib/db";
import { Album } from "@prisma/client";
import { connect } from "http2";

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
    return newComment;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};
