import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";

export default function PhotosList() {
  return (
    <>
      <div>
        <div>
            <h2>Photo Title</h2>
            <div>Describe the Photo</div>
        </div>
        <div>
            <RemoveBtn />
            <Link href={'/editDescription/123'}>
                <HiPencilAlt size={24} />
            </Link>
        </div>
      </div>
    </>
  );
}
