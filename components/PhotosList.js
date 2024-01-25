import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";

const getPhotos = async () => {
  try {
    const res = await fetch ("http://localhost:3000/api/photos",{
      cache: "no-store"
    });
    if(!res.ok){
      throw new Error(" Failed to fetch photos")
    }

    return res.json();
  } catch (error) {
    console.log("Error loading photos", error)
  }
};

export default async function PhotosList() {
  const { photos } = await getPhotos();

  return ( 
    <>
      {photos.map((p) => (
        <div key={p._id} className="p-4 border items-start border-slate-300 my-3 flex justify-between gap-5">
          <div>
            <h2 className="font-bold text-2xl">{p.photo}</h2>
            <div>{p.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={p._id}/>
            <Link href={`/editDescription/${p._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
