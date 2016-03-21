var initialTimeState = {}

// export function _indexTabShow(state = initialTimeState, action) {
//     switch (action.type) {
//         case 'SHOW-MARKET':
//             return {
//                 ...state,
//                 hideMarket: false,
//                 hideWareHouse: true,
//                 hideNews: true
//             }
//         case 'SHOW-WAREHOUSE':
//             return {
//                 ...state,
//                 hideMarket: true,
//                 hideWareHouse: false,
//                 hideNews: true
//             }
//         case 'SHOW-NEWS':
//             return {
//                 ...state,
//                 hideMarket: true,
//                 hideWareHouse: true,
//                 hideNews: false
//             }
//         default:
//             return state
//     }
// }


export function _index(state = initialTimeState, action) {
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

// export function _plate(state = initialTimeState, action) {
//     console.log('_plate reducer called with state ', state, ' and action ', action);

//     switch (action.type) {
//         case 'GET_PLATE_DATA_REQUEST':
//             return {
//                 ...state
//             }
//         case 'GET_PLATE_DATA_SUCCESS':
//             return {
//                 ...state,
//                 result: action.result
//             }
//         case 'GET_PLATE_DATA_FAILURE':
//             return {
//                 ...state
//             }
//         default:
//             return state
//     }
// }

// export function _rank(state = initialTimeState, action) {
//     console.log('_rank reducer called with state ', state, ' and action ', action);

//     switch (action.type) {
//         case 'GET_RANK_DATA_REQUEST':
//             return {
//                 ...state
//             }
//         case 'GET_RANK_DATA_SUCCESS':
//             return {
//                 ...state,
//                 result: action.result
//             }
//         case 'GET_RANK_DATA_FAILURE':
//             return {
//                 ...state
//             }
//         default:
//             return state
//     }
// }