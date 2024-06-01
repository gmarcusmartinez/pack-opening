import { useContext } from "react"
import PackOpeningContext from "../../context/PackOpeningContext"
import Rotate from "../../animations/rotate/Rotate"
import HoverImg from "../../animations/hover-img/HoverImg"
import GlowPulse from "../../animations/glow-pulse/GlowPulse"
import { mapRarityToColor } from "../../utils/mapRarityToColor"
import "./style.css"
import ScaleForward from "../scale-forward/ScaleForward"

interface Props {
  id: string
}
export default function AnimatedCard({ id }: Props) {
  const { state, actions } = useContext(PackOpeningContext)!
  const { flipCard } = actions

  const isFlipped = state.cards[id] ? state.cards[id].flipped : false

  const handleFlip = () => {
    if (isFlipped) {
      return
    } else {
      flipCard({ id, flipped: true, flipDelay: 0, playSound: true })
    }
  }

  return (
    <div className="card-container" onClick={handleFlip}>
      <Rotate id={id}>
        <div className="card-front">
          <HoverImg id={id}>
            <GlowPulse color={mapRarityToColor("uncommon")} id={id} />
            <ScaleForward id={id} src="/public/images/card_back.png" />
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
