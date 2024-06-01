/* eslint-disable react-hooks/exhaustive-deps */
import { createAnimation } from "@ionic/react"
import { getRandomFloat } from "../../utils/getRandomFloat"
import { useCallback, useContext, useEffect } from "react"
import PackOpeningContext from "../../context/PackOpeningContext"
import "./style.css"

interface Props {
  id: string
  children: React.ReactNode
}

export default function HoverImg({ id, children }: Props) {
  const animation = createAnimation()
  const imgContainer = document.getElementById(`imgContainer-${id}`)!
  const duration = getRandomFloat(3, 4, 0.1) * 1000

  const { state } = useContext(PackOpeningContext)!

  const runAnimation = useCallback(() => {
    void animation
      .addElement(imgContainer)
      .delay(800)
      .duration(duration)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: "translate(0, 0px)" },
        { offset: 0.5, transform: "translate(0, 10px)" },
        { offset: 1, transform: "translate(0, 0px)" },
      ])
      .play()
  }, [animation, duration, imgContainer])

  useEffect(() => {
    if (state.cards[id]?.flipped) runAnimation()
  }, [state.cards[id]?.flipped])

  return (
    <div className="hover-img" id={`imgContainer-${id}`}>
      {children}
    </div>
  )
}
