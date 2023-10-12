import { Assembler } from './Assembler'

export class App {
  private lines: string = ''

  constructor(private readonly assembler: Assembler) {}

  private async read(pathname: string): Promise<void> {
    const foo = Bun.file(pathname)

    this.lines = await foo.text()
    console.log(`compliling the file ${pathname}...`)
  }

  private parsePathname(pathname?: string): string {
    if (!pathname) {
      throw new Error('a path should be included use --path= !')
    }

    if (!pathname.endsWith('.asm')) {
      throw new Error('should end with .asm')
    }

    return pathname
  }

  private async save(output: string, filename: string): Promise<void> {
    const encoder = new TextEncoder()
    const data = encoder.encode(output)
    const dest = filename.concat('.hack')
    await Bun.write(dest, data)
  }

  public async execute(pathname?: string, is2Save?: boolean): Promise<void> {
    pathname = this.parsePathname(pathname)
    await this.read(pathname)
    const result = this.assembler.format(this.lines).toBinaryText()
    console.log(result)

    if (is2Save !== true) return
    const filename = pathname.split('.asm')[0]
    await this.save(result, filename)
  }
}
