/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import PackOpeningContext from "../../context/PackOpeningContext"
import { chunk } from "../../utils/chunk"
import { setInitialState } from "../../utils/setInitialState"
import AnimatedCard from "../animated-card/AnimatedCard"
import { IPack } from "../../api/types"
import "./style.css"
import FlipAllBtn from "../flip-all-btn/FlipAllBtn"

interface Props {
  pack: IPack
  ids: string[]
}

export default function PackLayout({ ids, pack }: Props) {
  const [top, setTop] = useState<string[]>([])
  const [middle, setMiddle] = useState<string[]>([])
  const [bottom, setBottom] = useState<string[]>([])
  const largePack = 7

  const { actions } = useContext(PackOpeningContext)!

  const topRow = top?.map((id: string) => <AnimatedCard key={id} id={id} />)
  const middleRow = middle?.map((id: string) => (
    <AnimatedCard key={id} id={id} />
  ))
  const bottomRow = bottom?.map((id: string) => (
    <AnimatedCard key={id} id={id} />
  ))

  const desktopList = (
    <div className="desktop-list">
      {topRow && <div className="pack-row">{topRow}</div>}
      {middleRow && <div className="pack-row">{middleRow}</div>}
      {bottomRow && <div className="pack-row">{bottomRow}</div>}
    </div>
  )

  useEffect(() => {
    actions.setPack(pack.cards)
    actions.setFlippedState(setInitialState(ids))
  }, [ids, pack.cards])

  useEffect(() => {
    const chunkDivisor = ids.length >= largePack ? 3 : 2
    const chunkSize = Math.ceil(ids.length / chunkDivisor)
    const chunks = chunk(ids, chunkSize)
    setTop(chunks[0])
    setMiddle(chunks[2])
    setBottom(chunks[1])
  }, [ids])

  return (
    <div className="flex flex-col">
      {desktopList}
      <FlipAllBtn />
    </div>
  )
}
