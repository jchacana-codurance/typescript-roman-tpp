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
        ["X", 10],
        ["XI", 11],
        ["XII", 12],
        ["XIII", 13],
        ["XIV", 14],
        ["XV", 15],
        ["XX", 20],
        ["XXV", 25],
        ["XXIX", 29],
        ["XXXIX", 39],
        ["XL", 40],
        ["L", 50],
    ])("should return '%s' for %i", (expected: string, number: number) => {
        const roman = convert(number)
        expect(roman).toBe(expected)
    })
})


