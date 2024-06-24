import React, { FC, useState } from "react";
import FormComments from "./form-comments";
import prisma from "../lib/db";

interface commentProps {
  albumId: string;
}

const Comments: FC<commentProps> = async ({ albumId }) => {
  const comments = await prisma.comment.findMany({
    where: { albumAlbumId: albumId },
  });

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <ul>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <li key={comment.id} className="mb-4 bg-slate-300 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="text-blue-500 font-bold mr-2">John Doe</div>
                <div className="text-gray-500">10-November-2023</div>
              </div>
              <p>{comment.text}</p>
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
