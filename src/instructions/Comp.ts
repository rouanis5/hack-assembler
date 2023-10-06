import { Bit } from '../Bit'
import { Word } from '../Word'

export class Comp extends Word {
  private zx: Bit // zero x
  private nx: Bit // negative x

  private zy: Bit
  private ny: Bit

  private f: Bit // function === 1 ? "+" : "&"
  private no: Bit // negate output

  private a: Bit // a or m

  constructor(word: string) {
    super(7)
    this.zx = this.getBit(0)
    this.nx = this.getBit(1)
    this.zy = this.getBit(2)
    this.ny = this.getBit(3)
    this.f = this.getBit(4)
    this.no = this.getBit(5)
    this.a = this.getBit(6)
  }
}
