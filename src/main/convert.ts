const symbols: Record<number, string> = {
    0: '',
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX'
}
export function convert(number: number): string {
    if(number === 0) return ""
    let symbol = getSymbolAndValue(number);
    return symbol.symbol + convert(number - symbol.value)
}

function getSymbolAndValue(number: number): {symbol: string, value: number} {
    if(number >= 9) return {symbol: "IX", value: 9}
    if(number >= 5) return {symbol: "V", value: 5}
    if(number >= 4) return {symbol: "IV", value: 4}
    if(number >= 1) return {symbol: "I", value: 1}
    return {symbol: "", value: 0}
}
