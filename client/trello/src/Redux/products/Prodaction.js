import { SET_POST, ADD_POST } from "./ProdactionTypes";


export const setPost = (data) => async (dispatch) => {
  try {
    dispatch({ type: SET_POST, payload:data })
  } catch (err) {
    console.log(err);
  }
}

export const addPost = (data, name) => async (dispatch) => {
  try {
    dispatch({ type: ADD_POST, payload:data , name:name})
  } catch (err) {
    console.log(err);
  }
}