const symbols: Record<number, {symbol: string, value: number}> = {
    0: {symbol: "", value: 0},
    1: {symbol: "I", value: 1},
    4: {symbol: "IV", value: 4},
    5: {symbol: "V", value: 5},
    9: {symbol: "IX", value: 9},
    10: {symbol: "X", value: 10},
    40: {symbol: "XL", value: 40},
    50: {symbol: "L", value: 50},
    90: {symbol: "XC", value: 90},
    100: {symbol: "C", value: 100},
    400: {symbol: "CD", value: 400},
    500: {symbol: "D", value: 500},
    900: {symbol: "CM", value: 900},
    1000: {symbol: "M", value: 1000},
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
