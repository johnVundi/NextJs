"use client"

import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi"



export default function RemoveBtn({id}){
    const router = useRouter;
    const removePhoto = async ()=>{
        const confirmed = confirm('are you sure?');

        if(confirmed){
          const res =  await fetch(`http://localhost:3000/api/photos?id=${id}`,{
                method: "DELETE",
            });
            if(res.ok){
                router.refresh();
            }
        };
    }
    return(
        <button onClick={removePhoto} className="text-red-400">
            <HiOutlineTrash size={24}/>
        </button>
    )
}