import { expect, test } from "@jest/globals"
import { curvedArea } from "./area"

test("area", () => {
    expect(curvedArea([[0, 0], [1, 1]])).toBe(0.5)
    expect(curvedArea([[0, 0], [1, 1], [2, 2]])).toBe(2)
    expect(curvedArea([[0, 0], [1, 2], [2, 4], [3, 8]])).toBe(10)
})
