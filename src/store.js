import { createStore , applyMiddleware  } from 'redux';
import reducers from './reducers';



const store1= createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store =store1;

export const store = store1;