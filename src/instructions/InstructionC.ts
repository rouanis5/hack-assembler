import { Dest } from './Dest'
import { Instruction } from './Instruction'
import { Jump } from './Jump'

export class InstructionC extends Instruction {
  private jump: Jump
  private dest: Dest
  // private comp: Comp

  constructor(line: string) {
    if (line[0] === '@') {
      throw new Error('Expected instruction C')
    }

    let [dest, value, jump]: string[] = []

    if (line.includes(';')) {
      const out = line.split(';')
      line = out[0]
      jump = out[1]
    }

    if (line.includes('=')) {
      const out = line.split('=')
      dest = out[0]
      value = out[1]
    } else {
      dest = line
    }

    super()
    this.dest = new Dest(dest)
    this.jump = new Jump(jump)

    this.insertAt(0, this.jump)
    this.insertAt(3, this.dest)
    // this.insertAt(6, this.comp)
    this.getBit(13).turnOn()
    this.getBit(14).turnOn()
    this.getBit(15).turnOn()
  }
}
