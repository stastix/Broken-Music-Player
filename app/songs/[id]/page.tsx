"use server";
import React, { lazy, Suspense } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Loading from "@/app/Loading";
import AlbumDetails from "./album";

const Album = async ({ params }: { params: any }) => {
  const Comments = lazy(() => import("../../(components)/comments"));
  return (
    <>
      <AlbumDetails params={params} />
      <Suspense fallback={<Loading />}>
        <div className="max-w-4xl mx-auto">
          <Comments albumId={params.id} />
        </div>
      </Suspense>
    </>
  );
};
export default Album;
