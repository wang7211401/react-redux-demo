import * as actions from "../constants/index"

const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { count: state.count + action.num }
    case actions.DECREMENT:
      return { count: state.count - action.num }
    default:
      return state
  }
}

export default counter
