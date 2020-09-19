import {combineReducers, createStore} from 'redux';
import {v4 as uuid} from 'uuid';


//actions

//ADD_TRANSACTION
const addTransaction = ({amount = 0, startDate = undefined, endDate = undefined, title = '', note = ''} = {})  => ({
  type: 'ADD_TRANSACTION',
  transaction: {
    amount,
    title,
    note,
    startDate,
    endDate,
    createdAt: new Date().getTime(),
    id: uuid()
  }
});
//REMOVE_TRANSACTION
const removeTransaction = ({id} = {}) => ({
  type: 'REMOVE_TRANSACTION',
  id
})
//EDIT_TRANSACTION
const editTransaction = ({id, update} = {}) => ({
  type: 'EDIT_TRANSACTION',
  id,
  update
})

//filters
// SET_SEARCH_TERM
const setSearchTerm = ({searchTerm = ''} = {}) => ({
  type: 'SET_SEARCH_TERM',
  searchTerm
})
// SET_START_DATE
const setStartDate = ({startDate = undefined} = {}) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
const setEndDate = ({endDate = undefined} = {}) => ({
  type: 'SET_END_DATE',
  endDate
})

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

const transactionsReducerDefaultState = []
const transactionsReducer = (state = transactionsReducerDefaultState, action ) => {
  switch(action.type) {
    case 'ADD_TRANSACTION':
      return [...state, action.transaction]
    case 'REMOVE_TRANSACTION':
      return [...state.filter((transaction) => transaction.id === action.id ? false:true)]
    case 'EDIT_TRANSACTION':
      console.log(action.update)
      return [...state.map((transaction) => {
        if(transaction.id === action.id){
          return {...transaction, ...action.update}
        }else {
          return transaction
        }
      })];  
    default:
      return state;
  }
}

const store = createStore(combineReducers({
  transactions: transactionsReducer,
  filters: filterReducer
}))



const visibleDate = (state, {searchTerm, startDate, endDate}) => {
  return state.filter((transaction) => {
    const startDateMatch = typeof startDate !== 'number' || transaction.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || transaction.createdAt <= endDate;
    const searchTermMatch = transaction.title.includes(searchTerm);

    return startDateMatch && endDateMatch && searchTermMatch;

  });
}


const unSubscribe = store.subscribe(() => {
  const storeState = store.getState();
  const UI = visibleDate(storeState.transactions, storeState.filters)
  console.log(UI);
})


const s1 = store.dispatch(addTransaction({amount: 5, title: 'rent'}));
const s2 = store.dispatch(addTransaction({amount: 25}));

const id = s2.transaction.id;

// REMOVING TRANSACTION
//store.dispatch(removeTransaction({id: id}));

// EDITING TRANSACTION
//store.dispatch(editTransaction({id, update: {amount: 100, title: 'RENT'}}));

store.dispatch(setSearchTerm({searchTerm: 'rent'}))

store.dispatch(setStartDate({startDate: 5555544998274}))
