// reducer.js
const initialState = false; // начальное состояние

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEMECHANGE":
      return !state; // переключение состояния
    default:
      return state;
  }
};

export default themeReducer;
