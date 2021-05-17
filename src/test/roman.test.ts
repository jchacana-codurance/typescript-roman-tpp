import {convert} from "../main/convert";

describe('Roman Numeral converter', () => {
    it.each([
        ["", 0],
        ["I", 1],
        ["II", 2],
        ["III", 3],
    ])("should return '%s' for %i", (expected: string, number: number) => {
        const roman = convert(number)
        expect(roman).toBe(expected)
    })
})


