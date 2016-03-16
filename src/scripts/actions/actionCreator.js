import { ADD_ITEM } from './actionTypes'

export function addItem() {
    return dispatch => {
        setTimeout(() => dispatch({type: ADD_ITEM}), 1000)
    }
}