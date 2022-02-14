class Calculadora {
  soma(a, b) {
    return a + b;
  }

  subtrai(a, b) {
    return a - b;
  }

  multiplica(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0 || a === 0) {
      throw new Error('Invalid argument');
    }

    return a / b;
  }
}

module.exports = Calculadora;
