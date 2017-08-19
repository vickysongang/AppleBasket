/**
 * Created by songang on 2017/8/18.
 */
import {injectReducer} from '../../store/reducers'

export default (store) => ({
  path: 'apple',
  getComponent (nextState, cb)  {
    require.ensure([], (require)=> {
      let AppleBasket = require('./containers').default
      const reducer = require('./modules/reducer').default
      injectReducer(store, {key: 'appleBasket', reducer})
      cb(null, AppleBasket)
    }, 'appleBasket')
  }
})
