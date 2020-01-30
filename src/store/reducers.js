const initialState = {
  selected: []
};

export const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED':
      return {
        ...state, 
        selected: action.value
      };
    
    default:
      return state;
  }
};
