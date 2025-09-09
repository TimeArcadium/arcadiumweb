import Image from "next/image";
import logo from "@/public/images/arcadiunslogonav.png"
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-center gap-2">
      <Image src={logo} alt="logo arcad" width={148} height={49} />
      <nav className="text-white font-lexend font-weight-regular">
        <Link href="#" className="mx-3">LOGIN</Link>
        <Link href="#" className="mx-3">CRIAR CONTA</Link>
        <Link href="#" className="mx-3">JOGOS</Link>
        <Link href="#" className="mx-3">RANKINGS</Link>
        <Link href="#" className="mx-3">MEMBROS</Link>
      </nav>

    </header>
  )
}
