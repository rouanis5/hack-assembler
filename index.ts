import { Assembler } from './src/Assembler'
import { InstructionFactory } from './src/InstructionFactory'

const foo = Bun.file('./asm/max/MaxL.asm')

const lines = await foo.text()

const instructionFactory = new InstructionFactory()
const assembler = new Assembler(lines, instructionFactory)

console.log(assembler.toBinaryText())
