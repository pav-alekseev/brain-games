import Expression from './expression';

export default class Multiplication extends Expression {
  calculate() {
    return this.firstNumber * this.secondNumber;
  }
}
