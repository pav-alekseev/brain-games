import Expression from './expression';

export default class Addition extends Expression {
  calculate() {
    return this.firstNumber + this.secondNumber;
  }
}
