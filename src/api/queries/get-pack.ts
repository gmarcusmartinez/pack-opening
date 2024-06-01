import axios from "axios"

export async function getPack(id: string) {
  const { data } = await axios.get(`http://localhost:3005/packs/${id}`)
  pause(500)
  return data
}

function pause(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
