import React from 'react';
import renderer from 'react-test-renderer';
import testProductsList from './products-list';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Products from '../Products';
import reducers from '../../redux/reducers/reducers';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //расширение для отладки
);

// фильтры: 0 - All, 1 - Cars, 2 - Suvs and Crossovers, 3 - Minivan and truck
const FILTER_ALL = 0;
const FILTER_ONLY_CARS = 1;
const FILTER_ONLY_SUVS_CROSSOVERS = 2;
const FILTER_ONLY_MINIVANS_TRUCKS = 3;


const cardsCountAll = testProductsList.length; // количество отфильтрованных товаров из массива - ВСЕ (All)
test(`Products - filter component - All (${cardsCountAll}pcs)`, () => {
    const component = renderer.create(
        <Provider store = {store}>
            <BrowserRouter>
                <Products testMode={ true } testProductsList={ testProductsList } testFilterStatus={FILTER_ALL}/>
            </BrowserRouter>
        </Provider>
    );

    const cards = component.root.findAll( elem => elem.props.className == "productCardTest" ); //ищем все карточки товаров
    expect(cards.length).toBe( cardsCountAll ); //количество отрендеренных карточек  должно быть равно количеству отфильтрованных товаров из массива
});



const cardsCountOnlyCars = testProductsList.filter(card => card.category === 'cars').length; // количество отфильтрованных товаров из массива - только легковые авто (cars)
test(`Products - filter component - Only Cars (${cardsCountOnlyCars})`, () => {
    const component = renderer.create(
        <Provider store = {store}>
            <BrowserRouter>
                <Products testMode={ true } testProductsList={ testProductsList } testFilterStatus={FILTER_ONLY_CARS}/>
            </BrowserRouter>
        </Provider>
    );

    const cards = component.root.findAll( elem => elem.props.className == "productCardTest" ); //ищем все карточки товаров
    expect(cards.length).toBe( cardsCountOnlyCars ); //количество отрендеренных карточек должно быть равно количеству отфильтрованных товаров из массива
});

const cardsCountOnlySuvsCrossovers = testProductsList.filter(card => card.category === 'suvs/crossovers').length;
test(`Products - filter component - Only Suvs and Crossovers (${cardsCountOnlySuvsCrossovers})`, () => {
    const component = renderer.create(
        <Provider store = {store}>
            <BrowserRouter>
                <Products testMode={ true } testProductsList={ testProductsList } testFilterStatus={FILTER_ONLY_SUVS_CROSSOVERS}/>
            </BrowserRouter>
        </Provider>
    );

    const cards = component.root.findAll( elem => elem.props.className == "productCardTest" ); //ищем все карточки товаров
    expect(cards.length).toBe( cardsCountOnlySuvsCrossovers ); //количество отрендеренных карточек должно быть равно количеству отфильтрованных товаров из массива
});

const cardsCountOnlyMinivanTrucks = testProductsList.filter(card => card.category === 'minivans/trucks').length;
test(`Products - filter component - Minivans and trucks (${cardsCountOnlyMinivanTrucks})`, () => {
    const component = renderer.create(
        <Provider store = {store}>
            <BrowserRouter>
                <Products testMode={ true } testProductsList={ testProductsList } testFilterStatus={FILTER_ONLY_MINIVANS_TRUCKS}/>
            </BrowserRouter>
        </Provider>
    );

    const cards = component.root.findAll( elem => elem.props.className == "productCardTest" ); //ищем все карточки товаров
    expect(cards.length).toBe( cardsCountOnlyMinivanTrucks ); //количество отрендеренных карточек должно быть равно количеству отфильтрованных товаров из массива
});