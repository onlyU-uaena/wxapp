import {
  ADD,
  DELETER, 
  FINISH, 
  SYNC
} from '../constants/todo'

export const add = () => {
  return {
    type: ADD
  }
}

export const deleter = () => {
  return {
    type: DELETER
  }
}

export const finish = () => {
  return {
    type: FINISH
  }
}

export const sync = () => {
  return {
    type: SYNC
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}