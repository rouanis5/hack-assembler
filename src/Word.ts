import { number, z } from 'zod'
import { Bit } from './Bit'

export abstract class Word {
  private size: number
  private bits: Bit[] = []

  constructor(size: number) {
    this.size = z.number().gt(0).lte(16).step(1).parse(number)

    for (let i = 0; i < this.size; i++) {
      this.bits.push(new Bit())
    }
  }

  private getRealIndex(index: number): number {
    return this.size - index - 1
  }

  getSize(): number {
    return this.size
  }

  getBit(index: number): Bit {
    const bit = this.bits[this.getRealIndex(index)]
    if (!bit) {
      throw new Error()
    }

    return bit
  }

  toBinary(line: string): void {
    line = line.trim()
    if (line === '' || line.length >= this.size) {
      throw new Error('Non valid size')
    }

    line
      .split('')
      .forEach((bit, index) =>
        this.getBit(line.length - index - 1).toBinary(bit)
      )
  }

  toString(): string {
    let str = ''
    for (let i = 0; i < this.size; i++) {
      str += this.getBit(i).toString()
    }
    return str
  }
}
