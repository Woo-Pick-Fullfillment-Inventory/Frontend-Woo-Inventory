export const delayCallback = (cb: () => void, delay: number): void => {
    setTimeout(() => {
        cb()
    }, delay);
}