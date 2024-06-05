import { ICard } from "../api/types"

export interface CardFlippedState {
  id: string
  flipped: boolean
  flipDelay: number
  playSound: boolean
}

export type ACTIONTYPE =
  | { type: "FLIP_CARD"; payload: CardFlippedState }
  | { type: "SET_FLIPPED_STATE"; payload: CardFlippedState[] }
  | { type: "SET_SELECTED_CARD_ID"; payload: string }
  | { type: "SHOW_MODAL"; payload: boolean }
  | { type: "SET_PACK"; payload: ICard[] }

export interface IPackOpeningContext {
  state: {
    cards: { [id: string]: CardFlippedState }
    isModalOpen: boolean
    selectedCardId: string
    pack: ICard[]
  }
  actions: {
    flipCard: (obj: CardFlippedState) => void
    setFlippedState: (list: CardFlippedState[]) => void
    setSelectedCardId: (id: string) => void
    showModal: (bool: boolean) => void
    setPack: (list: ICard[]) => void
  }
}
