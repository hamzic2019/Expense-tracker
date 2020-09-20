import {v4 as uuid} from 'uuid';
import moment from 'moment';

//ADD_TRANSACTION
export const addTransaction = ({amount = 0, startDate = undefined, endDate = undefined, title = '', note = '', createdAt = new Date().getTime()} = {})  => ({
  type: 'ADD_TRANSACTION',
  transaction: {
    amount,
    title,
    note,
    startDate,
    endDate,
    createdAt,
    id: uuid()
  }
});
//REMOVE_TRANSACTION
export const removeTransaction = ({id} = {}) => ({
  type: 'REMOVE_TRANSACTION',
  id
})
//EDIT_TRANSACTION
export const editTransaction = ({id, update} = {}) => ({
  type: 'EDIT_TRANSACTION',
  id,
  update
})
