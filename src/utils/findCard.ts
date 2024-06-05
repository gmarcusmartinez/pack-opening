import { ICard } from "../api/types"

export function findCard(pack: ICard[], id: string): ICard {
  return pack.find((card) => card.id === id) as ICard
}
