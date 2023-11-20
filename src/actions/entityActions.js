/* eslint-disable import/no-anonymous-default-export */
const setFilters = (filters) => ({
  type: 'SET_FILTERS',
  payload: filters,
});

export default {
  setFilters,
};