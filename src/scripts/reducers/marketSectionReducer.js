var initialTimeState = {}

export function marketSection(state = initialTimeState, action) {
  console.log('marketSection reducer called with state ', state , ' and action ', action);

  switch (action.type) {
   case 'GET_DATA_REQUEST':
      return {
        ...state,
        frozen: true
      }
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        result: action.result,
        frozen: false
      }
    case 'GET_DATA_FAILURE':
      return {
        ...state,
        frozen: false
      }
    default:
      return state
  }
}