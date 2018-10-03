export default class Expression {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  toString() {
    return `${this.firstNumber} ${this.sign} ${this.secondNumber}`;
  }
}
