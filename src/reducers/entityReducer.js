import produce from 'immer';
import entityFiltersActions from '../actions/entityActions';

const initialState = {
  entityFilters: {},
};

const entityFiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case entityFiltersActions.SET_ENTITY_FILTERS: {
      const { entityFilters } = action.payload;

      return produce(state, (draft) => {
        draft.entityFilters = entityFilters;
      });
    }

    default: {
      return state;
    }
  }
};

export default entityFiltersReducer;
