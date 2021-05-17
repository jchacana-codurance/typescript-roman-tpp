export function convert(number: number): string {
    let roman = ['', 'I', 'II', 'III', 'IV'];
    if(number >= 1) {
        return roman[number]
    }
    return roman[number]
}