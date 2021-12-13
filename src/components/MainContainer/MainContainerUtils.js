// C BUTTON
const resetHandler = (setFormula, formula) => {
  setFormula({
    ...formula,
    operator: '',
    number: 0,
    result: 0,
  });
};

// . BUTTON
const decimalHandler = (event, setFormula, formula) => {
  const value = event.target.value;
  const { number } = formula;
  setFormula({
    ...formula,
    number: !number.toString().includes('.') ? number + value : number,
  });
};

// + – x / BUTTONS
const operatorHandler = (event, setFormula, formula) => {
  const value = event.target.value;
  const { number, result } = formula;
  setFormula({
    ...formula,
    operator: value,
    number: 0,
    result: !result && number ? number : result,
  });
};

// = BUTTON
const equalHandler = (setFormula, formula) => {
  const { operator, number, result } = formula;
  if (formula.operator && formula.number) {
    const doTheMaths = (a, b, operator) =>
      operator === '+'
        ? a + b
        : operator === '-'
        ? a - b
        : operator === 'x'
        ? a * b
        : a / b;

    setFormula({
      ...formula,
      operator: '',
      number: 0,
      result: doTheMaths(result, number, operator),
    });
  }
};

// % BUTTON
const percentageHandler = (setFormula, formula) => {
  const { number, result } = formula;
  setFormula({
    ...formula,
    number: number / 100,
    result: number * result,
  });
};

// +- BUTTON
const flipHandler = (setFormula, formula) => {
  const { number, result } = formula;
  setFormula({
    ...formula,
    number: number ? number * -1 : 0,
    result: result ? result * -1 : 0,
    operator: '',
  });
};

// 0 TO 9 BUTTONS
const numberHandler = (event, setFormula, formula) => {
  const value = event.target.value;
  const { operator, number, result } = formula;
  setFormula({
    ...formula,
    number:
      number === 0 && value === '0'
        ? '0'
        : number % 1 === 0
        ? Number(number + value)
        : number + value,
    result: !operator ? 0 : result,
  });
};

export {
  resetHandler,
  decimalHandler,
  operatorHandler,
  equalHandler,
  percentageHandler,
  flipHandler,
  numberHandler,
};
