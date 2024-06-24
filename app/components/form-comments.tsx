"use client";
import React, { ChangeEvent, FC, useState } from "react";
import prisma from "../lib/db";
import { createComment } from "../data/comment";

interface commentProps {
  albumId: string;
}

const FormComments: FC<commentProps> = ({ albumId }) => {
  const [comment, setComment] = useState<string>("");
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  const handleSubmit = async () => {
    const newComment = await createComment({
      content: comment,
      albumID: albumId,
    });
    setComment("");
  };

  return (
    <div className="mt-4">
      <label
        htmlFor="comment"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Add a Comment
      </label>
      <input
        value={comment}
        onChange={handleCommentChange}
        type="text"
        className="w-full py-2 px-3 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        name="comment"
      ></input>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2 disabled:bg-gray-400"
        onClick={handleSubmit}
      >
        submit Comment
      </button>
    </div>
  );
};

export default FormComments;
