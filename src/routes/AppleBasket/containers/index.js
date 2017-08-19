import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../modules/actions'
/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import AppleBasket from '../components'

/*  Object of action creators (can also be function that returns object).
 Keys will be passed as props to presentational components. Here we are
 implementing our wrapper around increment; the component doesn't care   */


const mapStateToProps = (state) => {
  return {
    apples: state.appleBasket.apples,
    applesOnTree: state.appleBasket.applesOnTree,
    eatenApples: state.appleBasket.eatenApples,
    ripeningApples: state.appleBasket.ripeningApples
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  initApples: actions.initApples,
  pickApple: actions.pickApple,
  eatApple: actions.eatApple,
  repeningApple: actions.repeningApple
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppleBasket)
