import { CardFlippedState } from '../context/types';

export function setInitialState(arr: string[]): CardFlippedState[] {
    return arr.map((id) => ({ id, flipped: false, flipDelay: 0, playSound: false }));
}
