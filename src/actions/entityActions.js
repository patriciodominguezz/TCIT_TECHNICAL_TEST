/* eslint-disable import/no-anonymous-default-export */
const SET_ENTITY_FILTERS = '@account/set-entity-filters';

const setEntityFilters = (entityFilters) => (dispatch) => dispatch({
  type: SET_ENTITY_FILTERS,
  payload: {
    entityFilters,
  },
});


export default {
  setEntityFilters,
  SET_ENTITY_FILTERS,
};
