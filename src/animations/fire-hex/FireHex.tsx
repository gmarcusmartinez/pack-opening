/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect } from "react"
import PackOpeningContext from "../../context/PackOpeningContext"
import { createAnimation } from "@ionic/react"
import "./style.css"
import { findCard } from "../../utils/findCard"
import { Rarity, mapRarityToHex } from "../../utils/mapRarityToColor"

interface Props {
  id: string
}

export default function FireHex({ id }: Props) {
  const { state } = useContext(PackOpeningContext)!
  const delay = state.cards[id] && state.cards[id].flipDelay

  const { rarity } = findCard(state.pack, id)
  const color = mapRarityToHex(rarity as Rarity)

  const TOP_KEY_FRAMES = [
    { offset: 0, borderLeft: `1px solid ${color}` },
    { offset: 0.5, borderLeft: `12px solid ${color}` },
    { offset: 1, borderLeft: `0px solid ${color}` },
  ]

  const BOTTOM_KEY_FRAMES = [
    { offset: 0, borderRight: `1px solid ${color}` },
    { offset: 0.5, borderRight: `12px solid ${color}` },
    { offset: 1, borderRight: `0px solid ${color}` },
  ]

  const w_border = createAnimation()
    .addElement(document.getElementById(`w-${id}`)!)
    .keyframes([
      {
        offset: 0,
        borderLeft: `1px solid ${color}`,
        borderRight: `1px solid ${color}`,
      },
      {
        offset: 0.5,
        borderLeft: `12px solid ${color}`,
        borderRight: `12px solid ${color}`,
      },
      {
        offset: 1,
        borderLeft: `0px solid ${color}`,
        borderRight: `0px solid ${color}`,
      },
    ])

  const tl_border = createAnimation()
    .addElement(document.getElementById(`tl-${id}`)!)
    .keyframes(TOP_KEY_FRAMES)

  const tr_border = createAnimation()
    .addElement(document.getElementById(`tr-${id}`)!)
    .keyframes(TOP_KEY_FRAMES)

  const bl_border = createAnimation()
    .addElement(document.getElementById(`bl-${id}`)!)
    .keyframes(BOTTOM_KEY_FRAMES)

  const br_border = createAnimation()
    .addElement(document.getElementById(`br-${id}`)!)
    .keyframes(BOTTOM_KEY_FRAMES)

  const scale = createAnimation()
    .addElement(document.getElementById(`hex-${id}`)!)
    .keyframes([
      {
        offset: 0,
        justifySelf: `center`,
        transform: `scale(1.2) translateY(20%)`,
      },
      {
        offset: 0.5,
        justifySelf: `flex-start`,
        transform: `scale(1.4) translateY(20%)`,
      },
      { offset: 1, transform: `scale(1) translateY(0)` },
    ])

  const parent = createAnimation()
  const runAnimation = useCallback(() => {
    void parent
      .delay(delay)
      .duration(800)
      .iterations(1)
      .addAnimation([
        scale,
        w_border,
        tl_border,
        tr_border,
        bl_border,
        br_border,
      ])
      .play()
  }, [parent])

  useEffect(() => {
    if (state.cards[id]?.flipped) runAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.cards[id]?.flipped])

  return (
    <div className="fire-hex-container" id={`hex-${id}`}>
      <div className="fire-hex">
        <div className="fire-hex__tl" id={`tl-${id}`} />
        <div className="fire-hex__tr" id={`tr-${id}`} />
        <span className="fire-hex__w" id={`w-${id}`} />
        <div className="fire-hex__bl" id={`bl-${id}`} />
        <div className="fire-hex__br" id={`br-${id}`} />
        <svg>
          <filter id="wavy">
            <feTurbulence
              x="0"
              y="0"
              baseFrequency="0.009"
              numOctaves="5"
              seed="2"
            >
              <animate
                attributeName="baseFrequency"
                dur="60s"
                values="0.2; 0.9; 0.2"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              scale="10"
            ></feDisplacementMap>
          </filter>
        </svg>
      </div>
    </div>
  )
}
