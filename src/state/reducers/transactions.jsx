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


export default transactionsReducer;