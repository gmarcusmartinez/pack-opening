import { CardFlippedState } from '../context/types';

export function setDelaySequence(arr: CardFlippedState[]): CardFlippedState[] {
    const baseDelay = 400;
    const unflipped = arr.filter((card) => card.flipped === false).map((card) => card.id);
    return unflipped.map((id, i) => ({ id, flipped: true, flipDelay: +(i * baseDelay), playSound: true }));
}
