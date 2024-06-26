import { createContext, FC, useReducer } from "react"
import { ACTIONTYPE, CardFlippedState, IPackOpeningContext } from "./types"
// import { ICard } from "../api/types"
import _ from "lodash"
import { ICard } from "../api/types"

const initialState = {
  cards: {},
  isModalOpen: false,
  selectedCardId: "",
  pack: [] as ICard[],
}

const packOpeningReducer = (state: typeof initialState, action: ACTIONTYPE) => {
  const { type, payload } = action
  switch (type) {
    case "FLIP_CARD":
      return { ...state, cards: { ...state.cards, [payload.id]: payload } }
    case "SET_FLIPPED_STATE":
      return {
        ...state,
        cards: { ...state.cards, ..._.mapKeys(payload, "id") },
      }
    case "SET_SELECTED_CARD_ID":
      return { ...state, selectedCardId: payload }
    case "SHOW_MODAL":
      return { ...state, isModalOpen: payload }
    case "SET_PACK":
      return { ...state, pack: payload }
    default:
      return state
  }
}

const PackOpeningContext = createContext<IPackOpeningContext | null>(null)

interface Props {
  children: React.ReactNode
}

export const PackOpeningProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(packOpeningReducer, initialState)

  const flipCard = (payload: CardFlippedState) =>
    dispatch({ type: "FLIP_CARD", payload })
  const setFlippedState = (payload: CardFlippedState[]) =>
    dispatch({ type: "SET_FLIPPED_STATE", payload })
  const setSelectedCardId = (payload: string) =>
    dispatch({ type: "SET_SELECTED_CARD_ID", payload })
  const showModal = (payload: boolean) =>
    dispatch({ type: "SHOW_MODAL", payload })
  const setPack = (payload: ICard[]) => dispatch({ type: "SET_PACK", payload })

  const actions = {
    flipCard,
    setFlippedState,
    showModal,
    setSelectedCardId,
    setPack,
  }

  return (
    <PackOpeningContext.Provider value={{ state, actions }}>
      {children}
    </PackOpeningContext.Provider>
  )
}

export default PackOpeningContext
