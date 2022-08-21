import { FILTERBYCOLORS, FILTERBYSTATUS } from "./filterConstant";

const initialState = {
  status: "All",
    colors: [],
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERBYSTATUS:
      return {
        ...state,
        status: action.payload
      }
    case FILTERBYCOLORS:
     const {color, changeType} = action.payload;
     switch (changeType) {
      case 'added':
        return {
          ...state,
          colors: [...state.colors, color]
        }
        case 'remove':
          return {
            ...state,
            colors: state.colors.filter(f => f !== color)
          }
      default:
        return state
     }

    default:
     return state
  }
}

export default filterReducer;