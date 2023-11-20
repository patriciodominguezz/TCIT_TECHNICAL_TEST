const initialState = {
  filters: {
    searchValue: '',
  },
};

const entityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

export default entityReducer;