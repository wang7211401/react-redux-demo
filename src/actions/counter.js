import * as actions from "../constants/index"

export function increment(num) {
  // return {
  //   type: actions.INCREMENT,
  //   num,
  // }

  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: actions.INCREMENT,
        num,
      })
    }, 1000)
  }
}

export function decrement(num) {
  return {
    type: actions.DECREMENT,
    num,
  }
}
