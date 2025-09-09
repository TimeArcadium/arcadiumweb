import Image from "next/image";
import SearchLupa from "@/public/images/Vector.svg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Search() {
  return (
    <form className="relative">
      <Input
        type="search"
        className="bg-white w-32 h-7 rounded-full px-4 py-2 pr-10 shadow-md outline-none"
      />
      <Button size="icon" type="submit" className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer">
        <Image src={SearchLupa} alt="Search" />
      </Button>
    </form>
  )
}
