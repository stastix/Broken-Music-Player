"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { createComment } from "../data/comment";

interface commentProps {
  albumId: string;
}

const FormComments = ({ albumId }: { albumId: string }) => {
  const [comment, setComment] = useState<string>("");
  const [enableComment, setEnableComment] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
    setEnableComment(e.target.value.trim().length > 0);
  };
  const handleSelect = () => {
    setSelected(true);
  };
  const handleSubmit = async () => {
    await createComment({
      content: comment,
      albumID: albumId,
    });
    setComment("");
  };

  return (
    <div className="mt-4 flex flex-col">
      <input
        value={comment}
        onChange={handleCommentChange}
        type="text"
        onSelect={handleSelect}
        className="w-full py-2 px-4 border-b-2 border-gray-300 focus:outline-none focus:border-blue-900"
        name="comment"
        placeholder="Write a comment"
      />
      {selected && (
        <button
          className="bg-slate-900 hover:bg-slate-950 text-white py-1 px-1 rounded-s-lg mt-2 self-end disabled:bg-gray-700 m-2"
          onClick={handleSubmit}
          disabled={!enableComment}
        >
          <div className="text-sm">Comment</div>
        </button>
      )}
    </div>
  );
};

export default FormComments;
