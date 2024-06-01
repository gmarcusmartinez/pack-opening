import { getPack } from "../../api/queries/get-pack"
import { IPack } from "../../api/types"

export interface HomeLoaderResult {
  pack: IPack
}

export async function homeLoader(): Promise<HomeLoaderResult> {
  const pack = await getPack("1")
  if (!pack) throw new Error("Pack not found")
  return { pack }
}
