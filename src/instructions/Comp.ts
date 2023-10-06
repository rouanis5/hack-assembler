import { Bit } from '../Bit'
import { Word } from '../Word'

export class Comp extends Word {
  private zd: Bit // zero d
  private nd: Bit // negative d

  private za: Bit
  private na: Bit

  private add: Bit // function === 1 ? "+" : "&"
  private no: Bit // negate output

  private m: Bit // a or m

  constructor(word: string) {
    super(7)
    this.zd = this.getBit(0)
    this.nd = this.getBit(1)
    this.za = this.getBit(2)
    this.na = this.getBit(3)
    this.add = this.getBit(4)
    this.no = this.getBit(5)
    this.m = this.getBit(6)

    if (word.includes('M')) {
      this.m.turnOn()
    }

    // notice that
    // * M will be replace by A
    switch (word.replace('M', 'A')) {
      case '0':
        this.zd.turnOn()
        this.za.turnOn()
        break
      case '1':
        // this.parseBinary('111111') // not readable
        this.zd.turnOn()
        this.nd.turnOn()
        this.za.turnOn()
        this.na.turnOn()
        this.add.turnOn()
        this.no.turnOn()
        break
      case '-1':
        this.zd.turnOn()
        this.nd.turnOn()
        this.za.turnOn()
        this.add.turnOn()
        break
      case 'D':
        this.za.turnOn()
        this.na.turnOn()
        break
      case 'A':
        this.zd.turnOn()
        this.nd.turnOn()
        break
      case '!D':
        this.za.turnOn()
        this.na.turnOn()
        this.no.turnOn()
        break
      case '!A':
        this.zd.turnOn()
        this.nd.turnOn()
        this.no.turnOn()
        break
      case '-D':
        this.za.turnOn()
        this.na.turnOn()
        this.add.turnOn()
        this.no.turnOn()
        break
      case '-A':
        this.zd.turnOn()
        this.nd.turnOn()
        this.add.turnOn()
        this.no.turnOn()
        break
      case 'D+1':
        this.nd.turnOn()
        this.za.turnOn()
        this.na.turnOn()
        this.add.turnOn()
        this.no.turnOn()
        break
      case 'A+1': // ! something might be wrong here !!
        this.zd.turnOn()
        this.nd.turnOn()
        this.na.turnOn()
        this.add.turnOn()
        this.no.turnOn()
        break
      case 'D-1':
        this.za.turnOn()
        this.na.turnOn()
        this.add.turnOn()
        break
      case 'A-1':
        this.zd.turnOn()
        this.nd.turnOn()
        this.add.turnOn()
        break
      case 'D+A':
        this.add.turnOn()
        break
      case 'D-A':
        this.nd.turnOn()
        this.add.turnOn()
        this.no.turnOn()
        break
      case 'A-D':
        this.na.turnOn()
        this.add.turnOn()
        this.no.turnOn()
        break
      case 'D&A':
        break
      case 'D|A':
        this.nd.turnOn()
        this.na.turnOn()
        this.no.turnOn()
        break
      default:
        throw new Error('unexpected comp value, Received: ' + word)
    }
  }
}
