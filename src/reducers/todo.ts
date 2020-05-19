import {ADD, DELETER, FINISH, SYNC} from '../constants/todo'

const INITIAL_STATE = {
  todo: [
    {
      id: 0,
      name: "",
      date: Date,
      time: Date,
      co: [], // [{"id": 1, data: {"userId": <int>, "username": <string>}}]
      calss: 0, // 0, 1, 2 今天, 本周, 本月
      finish: false
    }
  ]
}

export default function todo (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD :
      return {
        ...state
      }
    case DELETER:
      return {
        ...state
      }
    case FINISH:
      return {
        ...state
      }
    case SYNC:
      return {
        ...state
      }
    default:
      return state
  }
}

