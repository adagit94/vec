import { expect, test } from "@jest/globals"
import { add, compare, distance, dot, length, normalize, scale, subtract } from "./vec2d"

test("vec2d", () => {
    expect(dot([1, 0], [0, 1])).toBe(0)

    expect(subtract([1, 0], [1, 1])).toEqual([0, -1])
    expect(subtract([1, 1], [1, 0])).toEqual([0, 1])

    expect(add([1, 0], [0, 1])).toEqual([1, 1])

    expect(scale([1, 2], 2)).toEqual([2, 4])

    expect(normalize([2, 0])).toEqual([1, 0])
    expect(normalize([0, 0])).toEqual([0, 0])

    expect(length([2, 0])).toBe(2)

    expect(distance([1, 0], [1, 1])).toBe(1)

    expect(compare([1.011, 1.011], [1.012, 1.012])).toBe(true)
    expect(compare([1.011, 1.011], [1.012, 1.012], 3)).toBe(false)
})
