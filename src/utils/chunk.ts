export function chunk(ids: string[], size: number): string[][] {
    const chunked = [];
    let index = 0;
    while (index < ids.length) {
        chunked.push(ids.slice(index, index + size));
        index += size;
    }
    return chunked;
}
