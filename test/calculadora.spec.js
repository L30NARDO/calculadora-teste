const Calculadora = require('../src/Calculadora');
const calc = new Calculadora();

test('Should add two numbers', () => {
  expect(calc.soma(3, 2)).toBe(5);
});

test('Should subtraindo two numbers', () => {
  expect(calc.subtrai(3, 2)).toBe(1);
});

test('Should multiply two numbers', () => {
  expect(calc.multiplica(3, 2)).toBe(6);
});

test('Should throw an Error with division by 0', () => {
  expect(() => {
    calc.divide(10, 0);
  }).toThrow();
});

test('Should divide two numbers', () => {
  expect(calc.divide(6, 2)).toBe(3);
});
