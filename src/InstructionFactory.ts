import { Instruction } from './instructions/Instruction'
import { InstructionA } from './instructions/InstructionA'
import { InstructionC } from './instructions/InstructionC'

export class InstructionFactory {
  private instruction!: Instruction

  insert(line: string) {
    if (line[0] === '@') {
      this.instruction = new InstructionA(line)
    }

    this.instruction = new InstructionC(line)
    return this
  }

  build(): Instruction {
    return this.instruction
  }
}
