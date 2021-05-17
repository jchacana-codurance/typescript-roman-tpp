import {convert} from "../main/convert";

describe('Roman Numeral converter', () => {
    it.each([
        ["", 0],
        ["I", 1],
        ["II", 2],
        ["III", 3],
        ["IV", 4],
        ["V", 5],
        ["VI", 6],
        ["VII", 7],
        ["VIII", 8],
        ["IX", 9],
    ])("should return '%s' for %i", (expected: string, number: number) => {
        const roman = convert(number)
        expect(roman).toBe(expected)
    })
})


