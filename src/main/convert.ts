const symbols: Record<number, {symbol: string, value: number}> = {
    0: {symbol: "", value: 0},
    1: {symbol: "I", value: 1},
    4: {symbol: "IV", value: 4},
    5: {symbol: "V", value: 5},
    9: {symbol: "IX", value: 9},
    10: {symbol: "X", value: 10},
    40: {symbol: "XL", value: 40},
}
export function convert(number: number): string {
    if(number === 0) return ""
    let symbol = getSymbolAndValue(number);
    return symbol.symbol + convert(number - symbol.value)
}

function getSymbolAndValue(number: number): {symbol: string, value: number} {
    let keys = Object.keys(symbols).map(value => Number(value)).reverse()
    for (let key of keys) {
        if(number >= key) return symbols[key]
    }
    return symbols[0]
}
