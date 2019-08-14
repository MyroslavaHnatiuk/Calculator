let initialState = {
  input: '',
  previousNumber: '',
  operator: ''
}

const calculator = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_INPUT':
        return Object.assign({}, state, {input: state.input + action.val})
      case 'CLEAR_INPUT':
        return Object.assign({}, state, {input: ''})
      case 'ADD':
        return Object.assign({}, state, {
          previousNumber: state.input,
          input: '',
          operator: 'plus'
        })
      case 'MINUS':
        return Object.assign({}, state, {
          previousNumber: state.input,
          input: '',
          operator: 'minus'
        })
      case 'MULTIPLY':
        return Object.assign({}, state, {
          previousNumber: state.input,
          input: '',
          operator: 'multiplication'
        })
      case 'DIVISION':
        return Object.assign({}, state, {
          previousNumber: state.input,
          input: '',
          operator: 'division'
        })
      case 'EQUAL':
        switch (state.operator) {
          case 'plus':
            return Object.assign({}, state, {
              input: parseFloat(state.previousNumber) + parseFloat(state.input)
            })
          case 'minus':
            return Object.assign({}, state, {
              input: parseFloat(state.previousNumber) - parseFloat(state.input)
            })
          case 'multiplication':
            return Object.assign({}, state, {
              input: parseFloat(state.previousNumber) * parseFloat(state.input)
            })
          case 'division':
            return Object.assign({}, state, {
              input: parseFloat(state.previousNumber) / parseFloat(state.input)
            })
          default:
            break;
        }
        
      default:
        return state
    }
  }
  
  export default calculator