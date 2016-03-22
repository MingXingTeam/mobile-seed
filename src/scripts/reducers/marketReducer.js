var initialTimeState = {

}

export function _index(state = initialTimeState, action) {
    switch (action.type) {
        case 'GET_INDEX_DATA_REQUEST':
            return {
                ...state
            }
        case 'GET_INDEX_DATA_SUCCESS':
            return {
                ...state,
                result: action.result
            }
        case 'GET_INDEX_DATA_FAILURE':
            return {
                ...state
            }
        default:
            return state
    }
}

export function _plate(state = initialTimeState, action) {
    console.log('_plate reducer called with state ', state, ' and action ', action);

    switch (action.type) {
        case 'GET_PLATE_DATA_REQUEST':
            return {
                ...state
            }
        case 'GET_PLATE_DATA_SUCCESS':
            return {
                ...state,
                result: action.result
            }
        case 'GET_PLATE_DATA_FAILURE':
            return {
                ...state
            }
        default:
            return state
    }
}

export function _rank(state = initialTimeState, action) {
    console.log('_rank reducer called with state ', state, ' and action ', action);

    switch (action.type) {
        case 'GET_RANK_DATA_REQUEST':
            return {
                ...state
            }
        case 'GET_RANK_DATA_SUCCESS':
            return {
                ...state,
                result: action.result
            }
        case 'GET_RANK_DATA_FAILURE':
            return {
                ...state
            }

        // case 'SHOW-DROP-TAB': // 切换排名选项卡
        //     return {
        //         ...state,
        //         hideDropTab: false,
        //         hideIncreaseTab: true,
        //         hideHandRateTab: true
        //     }
        // case 'SHOW-INCREASE-TAB': // 切换排名选项卡
        //     return {
        //         ...state,
        //         hideDropTab: true,
        //         hideIncreaseTab: false,
        //         hideHandRateTab: true
        //     }
        // case 'SHOW-HANDRATE-TAB': // 切换排名选项卡
        //     return {
        //         ...state,
        //         hideDropTab: true,
        //         hideIncreaseTab: true,
        //         hideHandRateTab: false
        //     }
        default:
            return state
    }
}