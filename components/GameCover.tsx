import { cn } from "@/lib/utils";
import Link from "next/link";

type GameCoverSize = 'small' | 'medium' | 'large';

function GameCover({ game, size, className }: { game: Game, size: GameCoverSize, className?: string }) {
  return (
    <Link href={`/games/${game.id}`} className={
      cn(
        size === 'small' ? 'w-16 h-24' : size === 'medium' ? 'w-20 h-32' : 'w-32 h-52',
        "rounded-[3px] border border-nebula-purple/30",
        className
      )
    }>
      <img src={game.cover} alt={game.title} className="h-full w-full" />
    </Link>
  )

}
export default GameCover;
