import { useContext } from "react"
import PackOpeningContext from "../../context/PackOpeningContext"
import { setDelaySequence } from "../../utils/setDelaySequence"
import "./style.css"

export default function FlipAllBtn() {
  const { state, actions } = useContext(PackOpeningContext)!
  const handleClick = () =>
    actions.setFlippedState(setDelaySequence(Object.values(state.cards)))

  return (
    <button className="flip-all-btn" onClick={handleClick}>
      Flip All
    </button>
  )
}
