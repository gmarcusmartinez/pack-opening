export interface IPack {
  id: string
  cards: ICard[]
}

export interface ICard {
  id: string
  title: string
  type: string
  rarity: string
  imgUrl: string
}
