const symbols: Record<number, {symbol: string, value: number}> = {
    0: {symbol: "", value: 0},
    1: {symbol: "I", value: 1},
    4: {symbol: "IV", value: 4},
    5: {symbol: "V", value: 5},
    9: {symbol: "IX", value: 9}
}
export function convert(number: number): string {
    if(number === 0) return ""
    let symbol = getSymbolAndValue(number);
    return symbol.symbol + convert(number - symbol.value)
}

function getSymbolAndValue(number: number): {symbol: string, value: number} {
    if(number >= 9) return symbols[9]
    if(number >= 5) return symbols[5]
    if(number >= 4) return symbols[4]
    if(number >= 1) return symbols[1]
    return symbols[0]
}
