
export const AddToInput = val => ({
  type: 'ADD_TO_INPUT',
  val
})

export const ClearInput = () => ({
  type: 'CLEAR_INPUT'
})

export const Add = () => ({
  type: "ADD"
})

export const Minus = () => ({
  type: "MINUS"
})

export const Multiplication = () => ({
  type: "MULTIPLY"
})

export const Division = () => ({
  type: "DIVISION"  
})

export const Equal = (val) => ({
  type: 'EQUAL',
  val
})
