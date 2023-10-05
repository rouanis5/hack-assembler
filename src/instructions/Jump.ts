import { Bit } from '../Bit'
import { Word } from '../Word'

export class Jump extends Word {
  // jump bits => ng zr ps (210)
  private ng: Bit
  private zr: Bit
  private ps: Bit

  constructor(word: string) {
    super(3)
    this.ps = this.getBit(0)
    this.zr = this.getBit(1)
    this.ng = this.getBit(2)

    switch (word) {
      case '':
        break
      case 'JGT':
        this.ps.turnOn()
        break
      case 'JEQ':
        this.zr.turnOn()
        break
      case 'JGE':
        this.ps.turnOn()
        this.zr.turnOn()
        break
      case 'JLT':
        this.ng.turnOn()
        break
      case 'JNE':
        this.ps.turnOn()
        this.ng.turnOn()
        break
      case 'JLE':
        this.ng.turnOn()
        break
      case 'JMP':
        this.ps.turnOn()
        this.zr.turnOn()
        this.ng.turnOn()
        break
      default:
        throw new Error('unkown jump')
    }
  }
}
