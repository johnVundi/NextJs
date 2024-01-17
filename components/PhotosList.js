import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";

export default function PhotosList() {
  return (
    <>
      <div className="p-4 border items-start border-slate-300 my-3 flex justify-between gap-5">
        <div>
            <h2 className="font-bold text-2xl">Photo Title</h2>
            <div>Describe the Photo</div>
        </div>
        <div className="flex gap-2">
            <RemoveBtn />
            <Link href={'/editDescription/123'}>
                <HiPencilAlt size={24} />
            </Link>
        </div>
      </div>
    </>
  );
}
