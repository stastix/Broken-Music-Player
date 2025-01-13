"use client";
import "./globals.css";
import Header from "../(components)/header";
import "@fortawesome/fontawesome-free/css/all.css";
import MusicPlayer from "../(components)/player";
import React, { useState } from "react";
import { Song } from "@prisma/client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [playTime, setPlayTime] = useState<number>(0);

  return (
    <html lang="en">
      <body className="h-screen flex-col">
        <Header />
        {React.cloneElement(children as React.ReactElement, {
          currentSong,
          setCurrentSong,
          setPlayTime,
        })}
        <MusicPlayer currentSong={currentSong} playTime={playTime} />
      </body>
    </html>
  );
}
