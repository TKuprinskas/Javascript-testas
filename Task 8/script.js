/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
  this.sum = function () {
    return this.num1 + this.num2;
  };

  this.subtraction = function () {
    return this.num1 - this.num2;
  };

  this.multiplication = function () {
    return this.num1 * this.num2;
  };

  this.division = function () {
    return this.num1 / this.num2;
  };
}

let calculator = new Calculator(8, 2);
console.log(calculator.sum());
console.log(calculator.subtraction());
console.log(calculator.multiplication());
console.log(calculator.division());
