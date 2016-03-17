var initialTimeState = {}

export function _pageHead(state = initialTimeState, action) {
  console.log('_pageHead reducer called with state ', state , ' and action ', action);

  switch (action.type) {
    case 'goSearchPage':
      return {
        ...state,
        goSearchPage: true
      }
    default:
      return state
  }
}