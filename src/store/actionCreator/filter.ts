import { SET_VISIBILITY_FILTER, filterTypes, visibilityFilterAction } from "../../types/filter"

export const setVisibilityFilterCreator = (filter: filterTypes) /*: {visibilityFilterAction} зачем эта строчка*/ => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter,
    }
}