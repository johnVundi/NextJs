import Link from "next/link"

export default function Navbar(){
    return(
        <nav>
            <Link href={"/"}>Family Album</Link>
            <Link href={"/addPhoto"}>Add Photo </Link>
        </nav>
    )
}