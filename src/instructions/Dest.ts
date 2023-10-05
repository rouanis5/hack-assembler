import { Bit } from '../Bit'
import { Word } from '../Word'

export class Dest extends Word {
  // Dest bits => AMD (210)
  private a: Bit
  private m: Bit
  private d: Bit

  constructor(word: string) {
    super(3)
    this.d = this.getBit(0)
    this.m = this.getBit(1)
    this.a = this.getBit(2)

    if (word.includes('A')) {
      this.a.turnOn()
    }

    if (word.includes('M')) {
      this.m.turnOn()
    }

    if (word.includes('D')) {
      this.d.turnOn()
    }
  }
}
