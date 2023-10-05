import { Instruction } from './instructions/Instruction'
import { InstructionFactory } from './InstructionFactory'

export class Assembler {
  instructions: Instruction[]
  private instructionFactory: InstructionFactory

  constructor(text: string, instructionFactory: InstructionFactory) {
    this.instructionFactory = instructionFactory
    const lines = this.parseText(text)

    this.instructions = lines.map((line) =>
      this.instructionFactory.insert(line.toString()).build()
    )
  }

  private parseText(text: String): String[] {
    return (
      text
        // extract lines
        .split('\r\n')
        // remove comments
        .map((line) => line.split('//')[0])
        // remove empty lines
        .filter((f) => f.trim())
    )
  }

  public toBinaryText(): String {
    return this.instructions
      .map((instruction) => instruction.toString())
      .join('\n')
  }
}
