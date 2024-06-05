export type Rarity = "common" | "uncommon" | "rare"

export const mapRarityToColor = (rarity: Rarity) => {
  switch (rarity) {
    case "common":
      return `bg-cyan-500`
    case "uncommon":
      return `bg-violet-500`
    case "rare":
      return `bg-yellow-300`
    default:
      return `bg-cyan-500`
  }
}

export const mapRarityToHex = (rarity: Rarity) => {
  switch (rarity) {
    case "common":
      return `#06b6d4`
    case "uncommon":
      return `#8b5cf6`
    case "rare":
      return `#fde047`
    default:
      return `#06b6d4`
  }
}
