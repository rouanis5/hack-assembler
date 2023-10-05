export class Bit {
  private value: 0 | 1 = 0

  toString(): string {
    return this.value.toString()
  }

  toBinary(char: string): void {
    if (char === '1') {
      this.turnOn()
      return
    }

    if (char === '0') {
      this.turnOff()
      return
    }

    throw new Error('invalid bit value: only 0 or 1')
  }

  turnOn(): void {
    this.value = 1
  }

  turnOff(): void {
    this.value = 0
  }

  invert(): void {
    this.value = this.toBoolean() ? 0 : 1
  }

  toBoolean(): boolean {
    return this.value === 1
  }
}
