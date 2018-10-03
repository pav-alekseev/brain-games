import Expression from './expression';

export default class Addition extends Expression {
  constructor(firstNumber, secondNumber) {
    super(firstNumber, secondNumber);
    this.sign = '+';
  }

  calculate() {
    return this.firstNumber + this.secondNumber;
  }
}
