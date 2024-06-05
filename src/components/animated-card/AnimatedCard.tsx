import { useContext, useEffect, useState } from "react"
import PackOpeningContext from "../../context/PackOpeningContext"
import Rotate from "../../animations/rotate/Rotate"
import HoverImg from "../../animations/hover-img/HoverImg"
import GlowPulse from "../../animations/glow-pulse/GlowPulse"
import { mapRarityToColor } from "../../utils/mapRarityToColor"
import ScaleForward from "../scale-forward/ScaleForward"
import FireHex from "../../animations/fire-hex/FireHex"
import swoosh from "../../assets/sounds/swoosh.mp4"
import { useSoundEffect } from "../../hooks/useSoundEffect"
import "./style.css"
import { findCard } from "../../utils/findCard"

interface Props {
  id: string
}

export default function AnimatedCard({ id }: Props) {
  const { state, actions } = useContext(PackOpeningContext)!
  const { flipCard } = actions

  const [triggered, setTriggered] = useState<boolean>(false)
  const isFlipped = state.cards[id] ? state.cards[id].flipped : false
  const flipDelay = state.cards[id] ? state.cards[id].flipDelay : 0
  const triggerSoundEffect = state.cards[id] ? state.cards[id].playSound : false
  const { soundEffect } = useSoundEffect({ sound: swoosh, volume: 0.5 })

  const handleFlip = () => {
    if (isFlipped) {
      return
    } else {
      flipCard({ id, flipped: true, flipDelay: 0, playSound: true })
    }
  }
  const playSwoosh = () => {
    soundEffect.play()
    setTriggered(true)
  }

  useEffect(() => {
    if (!triggered && triggerSoundEffect) setTimeout(playSwoosh, flipDelay)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggered, triggerSoundEffect])

  const { imgUrl } = findCard(state.pack, id)

  return (
    <div className="card-container" onClick={handleFlip}>
      <Rotate id={id}>
        <div className="card-front">
          <HoverImg id={id}>
            <FireHex id={id} />
            <GlowPulse color={mapRarityToColor("uncommon")} id={id} />
            <ScaleForward id={id} src={imgUrl} />
          </HoverImg>
          <div>hello</div>
        </div>
        <div className="card-back">
          <img className="card-back-img" src="/public/images/card_back.png" />
        </div>
      </Rotate>
    </div>
  )
}
