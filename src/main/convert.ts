export function convert(number: number): string {
    let roman = ['', 'I', 'II', 'III', 'IV'];
    if(number >= 4) return roman[4]
    if(number >= 1) {
        return roman[1] + convert(number - 1)
    }
    return roman[number]
}