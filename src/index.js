import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routes/AppRouter'
import {Provider} from 'react-redux'

import {store} from './state/store/configureStore'

// Redux state actions 
import {addTransaction} from './state/actions/transactions'


store.dispatch(addTransaction({amount: 49.56, title: 'Cafe Holiday'}));
store.dispatch(addTransaction({amount: 68.93, title: 'Headphones'}));


const jsx = (
  <Provider store={store}> 
    <AppRouter />
  </Provider>
)

const rootElement = document.getElementById("root");
ReactDOM.render(
  jsx,
  rootElement
);
