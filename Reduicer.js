import { ADD } from "./Actiontype"

const initialState = [{id:1,description:"drink coffe",isdone:false}]

export const reducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD:
    return state=[...state,payload]

  default:
    return state
  }
}
