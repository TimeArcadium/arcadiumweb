import Image from "next/image";
import logo from "@/public/images/logo.svg"
import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <header className="flex items-center justify-center gap-5">
      <Image src={logo} alt="logo arcad" width={148} height={49} />
      <nav className="text-white text-sm font-krona font-normal flex space-x-5">
        <Link href="#">LOGIN</Link>
        <Link href="#">CRIAR CONTA</Link>
        <Link href="#">JOGOS</Link>
        <Link href="#">RANKINGS</Link>
        <Link href="#">MEMBROS</Link>
      </nav>
      <Search />
    </header>
  )
}
