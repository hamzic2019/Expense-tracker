//filters
// SET_SEARCH_TERM
export const setSearchTerm = ({searchTerm = ''} = {}) => ({
  type: 'SET_SEARCH_TERM',
  searchTerm
})
// SET_START_DATE
export const setStartDate = ({startDate = undefined} = {}) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
export const setEndDate = ({endDate = undefined} = {}) => ({
  type: 'SET_END_DATE',
  endDate
})

