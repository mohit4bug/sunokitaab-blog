import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-center gap-6 md:gap-20 py-4 uppercase">
            <Link href="/">Home</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>
            <Link href="/">Sponsor</Link>
        </nav>
    )
}