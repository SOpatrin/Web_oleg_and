export function randomInt(end: number): number;
export function randomInt(start: number, end: number): number;
export function randomInt(...args: number[]) {
    const start = args.length > 1 ? args[0] : 0;
    const end = args.length > 1 ? args[1] : args[0];
    return Math.floor(Math.random() * (end - start) + start)
}
