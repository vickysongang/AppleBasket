/**
 * Created by songang on 2017/8/18.
 */
import * as types from './constants'
import * as apis from './apis'

function initApplesAction(payload) {
  return {
    type: types.INIT_APPLES,
    payload
  }
}

function initApples() {
  return (dispatch, getState) => {
    return apis.initApplesOnTree(20).then((apples)=> {
      dispatch(initApplesAction({apples}))
    })
  }
}

function pickAppleAction(payload) {
  return {
    type: types.PICK_APPLE,
    payload
  }
}

function pickApple() {
  return (dispatch, getState) => {
    dispatch(pickAppleAction({}))
  }
}

function eatAppleAction(payload) {
  return {
    type: types.EAT_APPLE,
    payload
  }
}

function eatApple(payload) {
  return (dispatch, getState) => {
    dispatch(eatAppleAction(payload))
  }
}

function repeningAppleAction(payload) {
  return {
    type: types.RIPENING_APPLE,
    payload
  }
}

function repeningApple(payload) {
  return (dispatch, getState) => {
    dispatch(repeningAppleAction(payload))
  }
}


export {
  initApples,
  pickApple,
  eatApple,
  repeningApple
}
