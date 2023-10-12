import { Instruction } from './instructions/Instruction'
import { InstructionFactory } from './InstructionFactory'

export class Assembler {
  private instructions: Instruction[] = []

  constructor(private readonly instructionFactory: InstructionFactory) {}

  format(text: string): this {
    const lines = this.parseText(text)

    this.instructions = lines.map((line) =>
      this.instructionFactory.insert(line.toString()).build()
    )

    return this
  }

  private parseText(text: string): string[] {
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

  public toBinaryText(): string {
    return this.instructions
      .map((instruction) => instruction.toString())
      .join('\r\n')
  }
}
