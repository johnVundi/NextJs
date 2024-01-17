import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className="text-white font-bold" href={"/"}>Family Album</Link>
            <Link className="p-2 bg-white" href={"/addPhoto"}>Add Photo </Link>
        </nav>
    )
}