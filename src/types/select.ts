import { filterTypes } from "./filter"

export type IOption = {
    label: string,
    value: filterTypes.SHOW_ACTIVE | filterTypes.SHOW_COMPLETED | filterTypes.SHOW_ALL
}
