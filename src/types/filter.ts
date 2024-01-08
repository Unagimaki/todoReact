export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export enum filterTypes {
    SHOW_ALL = 'SHOW_ALL',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE',
}
export interface setVisibilityFilterAction {
    type: typeof SET_VISIBILITY_FILTER,
    filter: filterTypes
}

export type visibilityFilterAction = setVisibilityFilterAction