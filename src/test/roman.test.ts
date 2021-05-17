import {convert} from "../main/convert";

describe('Roman Numeral converter', () => {
    it("should return '' for 0 ", () => {
        const roman = convert(0)
        expect(roman).toBe('')
    })
    it("should return 'I' for 1 ", () => {
        const roman = convert(1)
        expect(roman).toBe('I')
    })
})


