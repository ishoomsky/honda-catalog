import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { filterAllAC, filterCarsAC, filterSuvsCrossoversAC, filterMinivansTrucks } from '../redux/actions/productsFilterActions';

import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';

export default function ProductsFilter() {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.productsFilter); //status из redux

    const handleRadio = (buttonNumber) => {
        switch(buttonNumber) {
            case 0:
                dispatch( filterAllAC() );
                break;
            case 1:
                dispatch( filterCarsAC() );
                break;
            case 2:
                dispatch( filterSuvsCrossoversAC() );
                break;
            case 3:
                dispatch( filterMinivansTrucks() );
                break;
            default:
                dispatch( filterAllAC() );
        }
    };

    return (
        <div>
                <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="top">

                    <FormControlLabel checked={status === 0} value="0" control={<Radio color="primary" onClick={() => handleRadio(0)} />} label="All" />
                    <FormControlLabel checked={status === 1} value="1" control={<Radio color="primary" onClick={() => handleRadio(1)}/>} label="Cars" />
                    <FormControlLabel checked={status === 2} value="2" control={<Radio color="primary" onClick={() => handleRadio(2)}/>} label="Suvs and Crossovers" />
                    <FormControlLabel checked={status === 3} value="3" control={<Radio color="primary" onClick={() => handleRadio(3)}/>} label="Minivan and truck" />

                </RadioGroup>
                </FormControl>
        </div>
    );
}