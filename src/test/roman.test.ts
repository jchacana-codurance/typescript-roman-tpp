// 1 - I

import {convert} from "../main/convert";

describe('Roman Numeral converter', () => {
    it("should return '' for 0 ", () => {
        const roman = convert(0)
        expect(roman).toBe('')
    })
})


