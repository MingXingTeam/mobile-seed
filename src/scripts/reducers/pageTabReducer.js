var initialTimeState = {
    hideMarket: false,
    hideWareHouse: true,
    hideNews: true
}

export function _pageTab(state = initialTimeState, action) {
    // console.log('_index reducer called with state ', state , ' and action ', action);

    switch (action.type) {
        case 'SHOW-MARKET':
            return {
                ...state,
                hideMarket: false,
                hideWareHouse: true,
                hideNews: true
            }
        case 'SHOW-WAREHOUSE':
            return {
                ...state,
                hideMarket: true,
                hideWareHouse: false,
                hideNews: true
            }
        case 'SHOW-NEWS':
            return {
                ...state,
                hideMarket: true,
                hideWareHouse: true,
                hideNews: false
            }
        default:
            return state
    }
}