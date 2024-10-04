"use client";
import React from "react";
import { useComments } from "../custom-hooks/comments-hook";

const FormComments = ({ albumId }: { albumId: string }) => {
  const {
    comment,
    handleCommentChange,
    handleSelect,
    selected,
    handleSubmit,
    enableComment,
    handleCancel,
  } = useComments({ albumId });
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
        <div className="flex flex-row justify-end">
          <button
            className="bg-slate-900 hover:bg-slate-950 text-white py-1 px-1 rounded-s-lg mt-2 self-end disabled:bg-gray-700 m-2"
            onClick={handleSubmit}
            disabled={!enableComment}
          >
            <div className="text-sm">Comment</div>
          </button>

          <button
            className="bg-slate-900 hover:bg-slate-950 text-white py-1 px-1 rounded-s-lg mt-2 self-end disabled:bg-gray-700 m-2"
            onClick={handleCancel}
          >
            <div className="text-sm">cancel</div>
          </button>
        </div>
      )}
    </div>
  );
};

export default FormComments;
