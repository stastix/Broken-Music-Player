"use client";
import { createComment } from "@/app/data/comment";
import { ChangeEvent, useState } from "react";

export const useComments = ({ albumId }: { albumId: string }) => {
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
  const handleCancel = () => {
    setSelected(false);
    setComment("");
  };

  const handleSubmit = async () => {
    await createComment({
      content: comment,
      albumID: albumId,
    });
    setComment("");
  };
  return {
    enableComment,
    handleCommentChange,
    comment,
    selected,
    handleSelect,
    handleCancel,
    handleSubmit,
  };
};
