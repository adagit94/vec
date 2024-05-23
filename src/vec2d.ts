export const dot = (a: [number, number], b: [number, number]): number => a[0] * b[0] + a[1] * b[1]

export const subtract = (a: [number, number], b: [number, number]): [number, number] => [a[0] - b[0], a[1] - b[1]]

export const add = (a: [number, number], b: [number, number]): [number, number] => [a[0] + b[0], a[1] + b[1]]

export const scale = (vec: [number, number], factor: number): [number, number] => [vec[0] * factor, vec[1] * factor]

export const normalize = (vec: [number, number]): [number, number] => {
    const vecLength = length(vec)

    if (vecLength === 0) return [0, 0]

    return [vec[0] / vecLength, vec[1] / vecLength]
}

export const length = (vec: [number, number]): number => Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2))

export const distance = (a: [number, number], b: [number, number]): number => length(subtract(a, b))

/**
 * @description Compares axes values with defined precision. Default to 2.
 * @param a First vector or point coordinates.
 * @param b Second vector or point coordinates.
 * @param precision Floating point precision.
 * @returns True if axes values are same. False otherwise.
 */
export const compare = (a: [number, number], b: [number, number], precision = 2) => {
    if (a[0].toFixed(precision) !== b[0].toFixed(precision)) return false
    if (a[1].toFixed(precision) !== b[1].toFixed(precision)) return false

    return true
}
