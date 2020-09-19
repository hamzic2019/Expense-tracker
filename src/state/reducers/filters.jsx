const filterReducerDefaultState = {
  searchTerm: '',
  startDate: undefined,
  endDate: undefined
  //sortBy: 'date' // amount
}
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_SEARCH_TERM':
      return {...state, searchTerm: action.searchTerm}
    case 'SET_START_DATE': 
      return {...state, startDate: action.startDate}
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate}
    default:
      return state;
  }
}

export default filterReducer;