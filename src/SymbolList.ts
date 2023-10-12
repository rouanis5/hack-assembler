import { Symbol } from './Symbol'
import symbols from './default.json'

export class SymbolList {
  private symbols: Symbol[]

  constructor() {
    this.symbols = symbols.map((dd) => new Symbol(dd.label, dd.address))
  }

  addSymbol(label: string): void {
    const isExisted = this.symbols.find((sym) => sym.getLabel() === label)

    if (isExisted) {
      throw new Error()
    }

    let address: number

    this.symbols.forEach((symbol) => {})
    const symbol = new Symbol(label, 8)
    this.symbols.push(symbol)
  }

  getSymbolByAddress(address: number): Symbol | undefined {
    return this.symbols.find((s) => s.getAddress() === address)
  }

  getSymbolByLabel(label: string): Symbol | undefined {
    return this.symbols.find((sym) => sym.getLabel() === label)
  }
}
