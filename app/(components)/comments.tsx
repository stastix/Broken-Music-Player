"use server";
import React from "react";
import prisma from "../lib/db";
import FormComments from "./form-comments";

const Comments = async ({ albumId }: { albumId: string }) => {
  const comments = await prisma.comment.findMany({
    where: { albumAlbumId: albumId },
  });

  return (
    <div className="mt-8">
      <div className="m-3">
        <FormComments albumId={albumId} />
      </div>
      <ul>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <li key={comment.id} className="mb-4 bg-slate-900 p-1 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="text-blue-900 mr-2">John Doe</div>
                <div className="text-gray-500 text-sm">10-November-2023</div>
              </div>
              <div className="text-sm">{comment.text}</div>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No comments yet</li>
        )}
      </ul>
    </div>
  );
};

export default Comments;
