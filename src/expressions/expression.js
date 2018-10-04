export default class Expression {
  constructor(firstNumber, secondNumber, sign) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.sign = sign;
  }

  toString() {
    return `${this.firstNumber} ${this.sign} ${this.secondNumber}`;
  }
}
