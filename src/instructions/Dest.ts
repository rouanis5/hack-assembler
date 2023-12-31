import { Bit } from '../Bit'
import { Word } from '../Word'

export class Dest extends Word {
  // Dest bits => AMD (210)
  private a: Bit
  private d: Bit
  private m: Bit

  constructor(word: string) {
    super(3)
    this.m = this.getBit(0)
    this.d = this.getBit(1)
    this.a = this.getBit(2)

    if (word.split('').find((char) => !['A', 'M', 'D'].includes(char))) {
      throw new Error('Unexpected dest, Received: ' + word)
    }

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
