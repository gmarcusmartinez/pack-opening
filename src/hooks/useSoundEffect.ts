interface Args {
  sound: string
  volume: number
}

interface Data {
  soundEffect: HTMLAudioElement
}

export const useSoundEffect = ({ sound, volume }: Args): Data => {
  const soundEffect = new Audio(sound)
  soundEffect.volume = volume || 1
  return { soundEffect }
}
