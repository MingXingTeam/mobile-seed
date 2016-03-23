var initialTimeState = {
	isBackAble: false,
	isSearchAble: true,
	isIndexPage: true
}

export function _app(state = initialTimeState, action) {
    // console.log('_index reducer called with state ', state , ' and action ', action);

    switch (action.type) {
        case 'SHOW-KLINE-PAGE':
            return {
                ...state,
                isKlinePage: true,
                isBackAble: true,
                isSearchAble: false
            }
       
        default:
            return state
    }
}