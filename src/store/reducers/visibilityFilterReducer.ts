import { SET_VISIBILITY_FILTER, filterTypes, visibilityFilterAction } from "../../types/filter";


const initalState = filterTypes.SHOW_ALL

export const visibilityFilterReducer = (state = initalState, action: visibilityFilterAction) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
           return action.filter
        default:
            return state;
    }
}