/* eslint-disable react-hooks/exhaustive-deps */
import { createAnimation } from "@ionic/react"
import { useCallback, useContext, useEffect } from "react"
import PackOpeningContext from "../../context/PackOpeningContext"
import "./style.css"

interface Props {
  id: string
  color: string
}

export default function GlowPulse({ id, color }: Props) {
  const animation = createAnimation()
  const glow = document.getElementById(`glow-${id}`)!

  const { state } = useContext(PackOpeningContext)!

  const runAnimation = useCallback(() => {
    void animation
      .addElement(glow)
      .delay(800)
      .duration(4000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, height: "60%", width: "60%" },
        { offset: 0.5, height: "80%", width: "80%" },
        { offset: 1, height: "60%", width: "60%" },
      ])
      .play()
  }, [animation, glow])

  useEffect(() => {
    if (state.cards[id]?.flipped) runAnimation()
  }, [state.cards[id]?.flipped])

  return <div className={`glow-container ${color}`} id={`glow-${id}`} />
}
