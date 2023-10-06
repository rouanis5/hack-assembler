import { Word } from '../Word'
import { Instruction } from './Instruction'

export class InstructionA extends Instruction {
  private address: Word

  constructor(line: string) {
    if (line[0] !== '@') {
      throw new Error('Expected instruction A')
    }

    super()
    this.address = this.extract(0, 15)
    this.getBit(15).turnOff()
    this.address.parseDecimal(line.split('@')[1])
  }
}
