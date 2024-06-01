/* eslint-disable react-hooks/exhaustive-deps */
import { createAnimation } from "@ionic/react"
import { useCallback, useContext, useEffect } from "react"
import PackOpeningContext from "../../context/PackOpeningContext"
import "./style.css"

interface Props {
  id: string
  src: string
}

export default function ScaleForward({ id, src }: Props) {
  const animation = createAnimation()
  const scale = document.getElementById(`scale-${id}`)!

  const { state } = useContext(PackOpeningContext)!
  const delay = state.cards[id] && state.cards[id].flipDelay

  const runAnimation = useCallback(() => {
    void animation
      .addElement(scale)
      .delay(delay)
      .duration(800)
      .iterations(1)
      .keyframes([
        {
          offset: 0,
          transform: "scale(1.2) translateY(20%)",
          justifySelf: "center",
        },
        {
          offset: 0.5,
          transform: "scale(1.4) translateY(20%)",
          justifySelf: "flex-start",
        },
        { offset: 1, transform: "scale(1) translateY(0)" },
      ])
      .play()
  }, [scale, delay])

  useEffect(() => {
    if (state.cards[id]?.flipped) runAnimation()
  }, [state.cards[id]?.flipped])

  return <img className="scale-forward" id={`scale-${id}`} src={src} />
}
