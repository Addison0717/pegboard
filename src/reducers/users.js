export default (state = initialState, action = {}) => {
  switch(action.type){
  case '':
    return action.payload
  default:
    return state
  }
}

const initialState = {}
