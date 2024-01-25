"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPhoto() {
  const [photo, setPhoto] = useState("");
  const [description, setDescrption] = useState("");
  const router = useRouter

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!photo || !description){
      alert("Photo and description are required")
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/photos",{
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({photo, description})
      });

      if(res.ok){
        router.push("/");
      }else{
        throw new Error("failed to upload photo")
      }
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setPhoto(e.target.value)}
        value={photo}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Photo title"
      />
      <input
        onChange={(e) => setDescrption(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Photo Description"
      />
      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Photo
      </button>
    </form>
  );
}
