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
        return symbol.symbol + convert(number - symbol.value)
    }
    if(number >= 5) return symbol.symbol + convert(number - symbol.value)
    if(number >= 4) return symbol.symbol + convert(number - symbol.value)
    if(number >= 1) return symbols[1] + convert(number - 1)
    return symbols[number]
}

function getSymbolAndValue(number: number): {symbol: string, value: number} {
    if(number >= 9) return {symbol: "IX", value: 9}
    if(number >= 5) return {symbol: "V", value: 5}
    if(number >= 4) return {symbol: "IV", value: 4}
    return {symbol: "", value: 0}
}
