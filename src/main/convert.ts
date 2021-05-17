const symbols: Record<number, string> = {
    0: '',
    1: 'I',
    4: 'IV'
}
export function convert(number: number): string {
    if(number >= 5) return 'V'
    if(number >= 4) return symbols[4]
    if(number >= 1) {
        return symbols[1] + convert(number - 1)
    }
    return symbols[number]
}