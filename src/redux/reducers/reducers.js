import { combineReducers } from 'redux';
import productsFilterReducers from './productsFilterReducer';
import productsReducers from './productsReducers';

const combinedReducer = combineReducers({
    products: productsReducers,
    productsFilter: productsFilterReducers
});
export default combinedReducer;