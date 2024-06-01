type Rarity = "common" | "uncommon" | "rare"

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
