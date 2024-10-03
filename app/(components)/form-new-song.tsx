"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createAlbum } from "../data/album";

const FormNewSong = () => {
  interface FormData {
    title: string;
    songs: string[];
    image: File | null;
  }
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    songs: [""],
    image: null,
  });
  const addSong = () => {
    setFormData({ ...formData, songs: [...formData.songs, ""] });
  };
  const removeSong = (index: number) => {
    const newSongs = formData.songs.filter((_, i) => i !== index);
    setFormData({ ...formData, songs: newSongs });
  };

  const handleSongChange = (index: number, value: string) => {
    formData.songs[index] = value;

    setFormData({ ...formData });
  };

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setFormData({
      ...formData,
      image: file,
    });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const album = await createAlbum(formData);
    router.push(`/songs/${album.albumId}`);
  };

  return (
    <form className="max-w-sm mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter the title"
          name="title"
          className={
            "w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          }
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={
            "w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          }
        />
      </div>
      {imagePreview && (
        <div className="mb-4">
          <img src={imagePreview} alt="Preview" className="w-full h-auto" />
        </div>
      )}

      {formData.songs.map((song, index) => (
        <div className="mb-4 flex items-center" key={index}>
          <input
            type="text"
            placeholder={`Enter song ${index + 1} title`}
            value={song}
            onChange={(e) => handleSongChange(index, e.target.value)}
            className={`w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 flex-1 mr-2`}
          />
          <button
            type="button"
            onClick={() => removeSong(index)}
            className="bg-red-800 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md focus:outline-none focus:ring focus:border-red-300"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addSong}
        className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full mb-4"
      >
        Add Song
      </button>
      <button
        type="submit"
        className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400"
      >
        Submit
      </button>
    </form>
  );
};

export default FormNewSong;
