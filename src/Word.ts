import { number, z } from 'zod'
import { Bit } from './Bit'

export class Word {
  private size: number
  private bits: Bit[] = []

  constructor(size: number) {
    this.size = z.number().gt(0).lte(16).step(1).parse(size)

    for (let i = 0; i < this.size; i++) {
      this.bits.push(new Bit())
    }
  }

  replace(bit: Bit, index: number): void {
    this.getBit(index)
    this.bits[index] = bit
  }

  extract(start: number = 0, end: number = this.size): Word {
    const word = new Word(end - start)
    word.bits = this.bits.slice(start, end)
    return word
  }

  insertAt(start: number = 0, word: Word): void {
    word.bits.forEach((bit, index) => {
      this.bits[start + index] = bit
    })
  }

  getSize(): number {
    return this.size
  }

  getBit(index: number): Bit {
    const bit = this.bits[index]
    if (!bit) {
      throw new Error('unkown index')
    }

    return bit
  }

  parseBinary(line: string): void {
    line = line.trim()
    if (line === '' || line.length >= this.size) {
      throw new Error('Non valid size, received: ' + line.length)
    }

    line
      .split('')
      .reverse()
      .forEach((bit, index) => this.getBit(index).toBinary(bit))
  }

  parseDecimal(line: string): void {
    line = line.trim()
    if (line === '' || line.length >= this.size) {
      throw new Error('Non valid size, received: ' + line.length)
    }

    // convert number to bianry
    line = parseInt(line).toString(2)
    this.parseBinary(line)
  }

  toString(): string {
    return this.bits
      .map((bit) => bit.toString())
      .reverse()
      .join('')
  }
}
