import { z } from 'zod'

export class Symbol {
  private label: string
  private address: number

  constructor(label: string, address: number) {
    this.label = label
    this.address = z.number().positive().step(1).lte(24576).parse(address)
  }

  getAddress(): number {
    return this.address
  }

  getLabel(): string {
    return this.label
  }
}
