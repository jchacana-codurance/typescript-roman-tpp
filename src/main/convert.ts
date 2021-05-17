const symbols: Record<number, string> = {
    0: '',
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX'
}
export function convert(number: number): string {
    let symbol = getSymbolAndValue(number);
    if(number >= 9) {
        return symbol.symbol + convert(number - 9)
    }
    if(number >= 5) return symbols[5] + convert(number - 5)
    if(number >= 4) return symbols[4]
    if(number >= 1) return symbols[1] + convert(number - 1)
    return symbols[number]
}

function getSymbolAndValue(number: number): {symbol: string, value: number} {
    if(number >= 9) return {symbol: "IX", value: 9}
    return {symbol: "", value: 0}
}
