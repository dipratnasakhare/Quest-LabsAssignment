import { ADD_POST, SET_POST } from "./ProdactionTypes";

const init = {
  data: {},
  object:[]

};

export const prodReducer = (state = init, action) => {
  switch (action.type) {
    case SET_POST: {
      let size = Object.keys(state.data).length
      let arr = state.data[`board${size + 1}`] || [action.payload];
      init.data[`board${size + 1}`] = arr;
      console.log(state.data, size)

      return {
        ...state,
      };
    }
    case ADD_POST: {
     
console.log(action)
let arr = state.data[action.name] 
arr.push(action.payload)
init.data[action.name] = arr

// let data = state.data
// let arrNew = []

// for (let i in data) {
//   arrNew.push({ name: i });
// }

// init.object = arrNew

      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
