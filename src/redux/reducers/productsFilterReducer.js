import { FILTER_ALL, FILTER_CARS, FILTER_SUVS_CROSSOVERS, FILTER_MINIVANS_TRUCKS } from '../actions/productsFilterActions';

const initState={
    status: 0, // 0 - Filter All, 1 - Filter Cars, 2 - Filter Suvs and Crossovers, 3 - Filter Minivan and truck
}

const productsFilterReducers = (state = initState, action) => {
    switch (action.type) {

        case FILTER_ALL: {
            let newState = {
                status: 0,
            };
            return newState;
        }

        case FILTER_CARS: {
            let newState = {
                status: 1,
            };
            return newState;
        }

        case FILTER_SUVS_CROSSOVERS: {
            let newState = {
                status: 2,
            };
            return newState;
        }
        case FILTER_MINIVANS_TRUCKS: {
            let newState = {
                status: 3,
            };
            return newState;
        }

        default:
            return state;
    }
};
export default productsFilterReducers;