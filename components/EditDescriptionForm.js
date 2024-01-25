"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"


export default function EditDesriptionForm({id, tittle, description}){
  const [newTittle, setNewTittle] = useState(tittle)
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();
  const handleSubmit = async(e)=>{
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/photos/${id}`,{
        method: "PUT",
        headers:{
          "content-type": "application/json",
        },
        body: JSON.stringify({newDescription}),
      });
      if(!res.ok){
        throw new Error("failed to update")
      }

      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

    return(
    <form onSubmit={handleSubmit} className="flex flex-col gap-3"> 
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Photo title"
      />
      <input
      onChange={(e)=> setNewDescription(e.target.value)}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Photo Description"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Photo Description</button>
    </form>
    )
}
