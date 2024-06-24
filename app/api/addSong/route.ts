import { NextResponse } from "next/server";
import prisma from "../../lib/db";
import { Song } from "@prisma/client";
import { Prisma } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const { title, songs, createdAt } = await req.json();
    const newAlbum = await prisma.album.create({
      data: {
        title,
        createdAt,
        songs: {
          createMany: {
            data: songs.map((song: Song) => ({ title: song.title })),
          },
        },
      },
      include: {
        songs: true,
      },
    });

    return NextResponse.json({ newAlbum }, { status: 200 });
  } catch (error) {
    console.log("Error Adding Album", { status: 500 });
  }
}
