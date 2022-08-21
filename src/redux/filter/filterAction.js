import { FILTERBYCOLORS, FILTERBYSTATUS } from "./filterConstant"

export const filterByStatus = (statusType) => {
  return {
    type: FILTERBYSTATUS,
    payload: statusType,
  }
}

export const filterByColor = (color, changeType) => {
  return {
    type: FILTERBYCOLORS,
    payload: {color, changeType},
  }
} 