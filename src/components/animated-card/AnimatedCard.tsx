import { useContext } from "react"
import "./style.css"
import PackOpeningContext from "../../context/PackOpeningContext"
import Rotate from "../../animations/rotate/Rotate"

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
        <div className="card-front"></div>
        <div className="card-back">
          <img className="card-back-img" src="/public/images/card_back.png" />
        </div>
      </Rotate>
    </div>
  )
}
