import { App } from './src/App'
import { Assembler } from './src/Assembler'
import { InstructionFactory } from './src/InstructionFactory'

const pathname = process.argv
  .find((arg) => arg.startsWith('--path='))
  ?.split('--path=')[1]

const is2Save = process.argv.find((arg) => arg === '-s' || arg === '--save')
  ? true
  : false

const instructionFactory = new InstructionFactory()
const assembler = new Assembler(instructionFactory)
const app = new App(assembler)

app.execute(pathname, is2Save)
