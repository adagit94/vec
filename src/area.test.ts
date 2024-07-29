import { expect, test } from "@jest/globals"
import { curvedArea, density, densityPopulated } from "./area"

test("area", () => {
    expect(
        curvedArea([
            [0, 0],
            [1, 1],
        ])
    ).toBe(0.5)

    expect(
        curvedArea([
            [0, 0],
            [1, 1],
            [2, 2],
        ])
    ).toBe(2)

    expect(
        curvedArea([
            [0, 0],
            [1, 2],
            [2, 4],
            [3, 8],
        ])
    ).toBe(10)

    expect(
        density({
            values: [
                [1, 1],
                [2, 1],
            ],
            width: 100,
            height: 100,
        })
    ).toBe(0.0002)

    expect(
        density({
            values: [
                [1, 1],
                [2, 1],
                [4, 1],
            ],
            width: 100,
            height: 100,
            xInterval: [0, 2]
        })
    ).toBe(0.0004)

    expect(
        density({
            values: [
                [1, 1],
                [2, 1],
                [2, 2],
            ],
            width: 100,
            height: 100,
            yInterval: [0, 1]
        })
    ).toBe(0.0004)

    expect(
        densityPopulated({
            values: [
                [2, 2],
                [2, 1],
                [1, 1],
                [1, 2],
            ],
            width: 100,
            height: 100,
        })
    ).toBe(0.0016)
})
