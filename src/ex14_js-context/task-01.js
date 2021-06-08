let Calculator = {
    currentState: 0,
    add(operand) {
      if (operand !== undefined) {
        this.currentState += operand;
      }
  
      return this;
    },
    subtract(operand) {
      if (operand !== undefined) {
        this.currentState -= operand;
      }
  
      return this
    },
    divide(operand) {
      if (operand !== undefined) {
        this.currentState /= operand;
      }
  
      return this;
    },
    multiply(operand) {
      if (operand !== undefined) {
        this.currentState *= operand;
      }
  
      return this;
    },
    getResult() {
      return this.currentState;
    },
    reset() {
      this.currentState = 0;
  
      return this;
    },
    fetchData(callback) {
      setTimeout(callback, 5000, state = 500);
      this.currentState = state;
  
      return this;
    },
    setState(state) {
      if (arguments.length === 0) {
        this.currentState = 0;
      } else {
      this.currentState = state;
      }
      return this;
    }
  }
  
  
  module.exports = Calculator;