import { cn } from "@/lib/utils";
import Link from "next/link";

function GameCover({ game, className }: { game: Game, className?: string }) {
  return (
    <Link href={`/games/${game.id}`} className={cn(className)}>
      <img src={game.cover} alt={game.title} />
    </Link>
  )

}
export default GameCover;
