import React from "react"
import { connect } from "react-redux"
// import { increment, decrement } from "./actions/counter"
import * as counterActions from "./actions/counter"
import { bindActionCreators } from "redux"

class App extends React.Component {
  render() {
    const { count, counterActions } = this.props
    return (
      <div className='App'>
        <p>{count}</p>
        <button onClick={() => counterActions.increment(10)}>+10</button>
        <button onClick={() => counterActions.decrement(5)}>-5</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch(increment())
//     },
//     decrement: () => {
//       dispatch(decrement())
//     },
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    counterActions: bindActionCreators(counterActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
