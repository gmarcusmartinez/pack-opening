/* eslint-disable react-hooks/exhaustive-deps */
import { createAnimation } from "@ionic/react"
import { useCallback, useContext, useEffect } from "react"
import PackOpeningContext from "../../context/PackOpeningContext"

interface Props {
  children: React.ReactNode
  id: string
}

export default function Rotate({ children, id }: Props) {
  const animation = createAnimation()
  const rotate = document.getElementById(`rotate-${id}`)!

  const { state } = useContext(PackOpeningContext)!
  const delay = state.cards[id] && state.cards[id].flipDelay

  const runAnimation = useCallback(() => {
    void animation
      .addElement(rotate)
      .delay(delay)
      .duration(400)
      .fromTo("transform", "rotateY(0deg)", "rotateY(180deg)")
      .iterations(1)
      .play()
  }, [rotate, delay])

  useEffect(() => {
    if (state.cards[id]?.flipped) runAnimation()
  }, [state.cards[id]?.flipped])

  return (
    <div id={`rotate-${id}`} className="rotate-container">
      {children}
    </div>
  )
}
