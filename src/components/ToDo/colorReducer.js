function colorReducer(state, action) {
  switch (action.type) {
  case 'fillListColor':
    return action.data
  case 'resetColor':
    return action.data
  default:
    throw new Error('unexpected action type')
  }
}

export default colorReducer
