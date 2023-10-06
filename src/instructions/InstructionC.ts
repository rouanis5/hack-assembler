import { Comp } from './Comp'
import { Dest } from './Dest'
import { Instruction } from './Instruction'
import { Jump } from './Jump'

export class InstructionC extends Instruction {
  private jump: Jump
  private dest: Dest
  private comp: Comp

  constructor(line: string) {
    if (line[0] === '@') {
      throw new Error('Expected instruction C')
    }

    let [dest, value, jump]: string[] = []

    let out = line.split(';')
    jump = out[1] ?? ''

    out = out[0].split('=')
    dest = out[0] ?? ''
    value = out[1] ?? ''

    if (value === '') {
      ;[dest, value] = [value, dest]
    }

    super()
    this.dest = new Dest(dest)
    this.jump = new Jump(jump)
    this.comp = new Comp(value)

    this.insertAt(0, this.jump)
    this.insertAt(3, this.dest)
    this.insertAt(6, this.comp)
    this.getBit(13).turnOn()
    this.getBit(14).turnOn()
    this.getBit(15).turnOn()
  }
}
