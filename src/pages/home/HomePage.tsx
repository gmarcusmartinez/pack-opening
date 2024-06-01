import { useLoaderData } from "react-router-dom"
import { AbsoluteBg } from "../../components/absolute-bg/AbsoluteBg"
import { HomeLoaderResult } from "./loader"
import PackLayout from "../../components/pack-layout/PackLayout"
import { ICard } from "../../api/types"

export default function HomePage() {
  const { pack } = useLoaderData() as HomeLoaderResult

  return (
    <div className="flex min-h-screen flex-col w-screen relative justify-center">
      <AbsoluteBg />
      <PackLayout cardIds={pack.cards.map((card: ICard) => card.id)} />
    </div>
  )
}
