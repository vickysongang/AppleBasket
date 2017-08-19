/**
 * Created by songang on 2017/8/18.
 */
import * as types from './constants'
const initialState = {
  applesOnTree: [],
  apples: [],
  eatenApples: [],
  ripeningApples: []
}

function appleReducer(state = initialState, action) {
  switch (action.type) {
    case types.INIT_APPLES:
      return initApples(state, action)

    case types.PICK_APPLE:
      return pickApple(state, action)

    case types.EAT_APPLE:
      return eatApple(state, action)

    case types.RIPENING_APPLE:
      return ripeningApple(state, action)

    default:
      return state
  }
}

function initApples(state, action) {
  let payload = action.payload
  let apples = payload.apples
  state = {
    apples: [],
    applesOnTree: apples,
    eatenApples: [],
    ripeningApples: []
  }
  return state
}

function pickApple(state, action) {
  let apple = state.applesOnTree.shift()
  state = {
    applesOnTree: state.applesOnTree,
    apples: state.apples.concat([apple]),
    eatenApples: state.eatenApples,
    ripeningApples: state.ripeningApples
  }
  return state
}

function eatApple(state, action) {
  let payload = action.payload
  let id = payload.id
  let apples = state.apples
  let restApples = []
  let eatenApple = undefined
  apples.forEach((apple)=> {
    if (apple.id !== id) {
      restApples.push(apple)
    } else {
      eatenApple = apple
    }
  })
  let eatenApples = state.eatenApples
  if (eatenApple) {
    eatenApples.push(eatenApple)
  }
  state = {
    applesOnTree: state.applesOnTree,
    apples: restApples,
    eatenApples: eatenApples,
    ripeningApples: state.ripeningApples
  }
  return state
}

function ripeningApple(state, action) {
  let payload = action.payload
  let id = payload.id
  let apples = state.apples
  let ripeningApples = state.ripeningApples
  let restApples = []
  apples.forEach((apple)=> {
    if (apple.id === id) {
      ripeningApples.push(apple)
      apple.type = 'red'
    }
    restApples.push(apple)
  })
  state = {
    applesOnTree: state.applesOnTree,
    apples: restApples,
    eatenApples: state.eatenApples,
    ripeningApples: ripeningApples
  }
  return state
}

export default appleReducer

