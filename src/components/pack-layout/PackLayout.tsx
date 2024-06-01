/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import PackOpeningContext from "../../context/PackOpeningContext"
import { chunk } from "../../utils/chunk"
import "./style.css"
import { setInitialState } from "../../utils/setInitialState"
import AnimatedCard from "../animated-card/AnimatedCard"

interface Props {
  cardIds: string[]
}

export default function PackLayout({ cardIds }: Props) {
  const [top, setTop] = useState<string[]>([])
  const [middle, setMiddle] = useState<string[]>([])
  const [bottom, setBottom] = useState<string[]>([])
  const largePack = 7

  const { actions } = useContext(PackOpeningContext)!

  const topRow = top?.map((id: string) => <AnimatedCard key={id} />)
  const middleRow = middle?.map((id: string) => <AnimatedCard key={id} />)
  const bottomRow = bottom?.map((id: string) => <AnimatedCard key={id} />)

  const desktopList = (
    <div className="desktop-list">
      {topRow && <div className="pack-row">{topRow}</div>}
      {middleRow && <div className="pack-row">{middleRow}</div>}
      {bottomRow && <div className="pack-row">{bottomRow}</div>}
    </div>
  )
  useEffect(() => {
    actions.setFlippedState(setInitialState(cardIds))
  }, [cardIds])

  useEffect(() => {
    const chunkDivisor = cardIds.length >= largePack ? 3 : 2
    const chunkSize = Math.ceil(cardIds.length / chunkDivisor)
    const chunks = chunk(cardIds, chunkSize)

    setTop(chunks[0])
    setMiddle(chunks[2])
    setBottom(chunks[1])
  }, [cardIds])

  return <div className="">{desktopList}</div>
}
