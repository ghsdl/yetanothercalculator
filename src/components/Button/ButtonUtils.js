// TODO: functions to handle buttons such as
// C resetHandler()
// +- switchHandler()
// % percentHandler()
// = equalHandler()
// / - * + calcHandler()
// . decimalHandler()
// 0 - 9 numberHandler()

const resetHandler = (formula, setFormula) => {
  setFormula({
    ...formula,
    operator: '',
    number: 0,
    result: 0,
  });
};

const numberHandler = (buttonValue, formula, setFormula) => {
  // TODO: how many numbers can be typed maximum ? handle typing 10 100 or 1000 not just 1... -.-
  setFormula({
    ...formula,
    number: Number(buttonValue),
    result: formula.result,
  });
};

export { numberHandler, resetHandler };
