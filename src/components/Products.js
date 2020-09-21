import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ProductCard from './ProductCard';
import Preloader from './Preloader';
import Error from './Error';
import ProductsFilter from './ProductsFilter';

import { Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Products(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    //test module
    let testMode = props.testMode || false;
    let testProductsList = props.testProductsList || null;
    let testFilterStatus = props.testFilterStatus || 0;
    //test module

    const { status: fetchStatus, data: fetchData } = useSelector(state => state.products);     // fetchStatus: 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены, 999 - тестовый режим;
    const { status: filterStatus } = useSelector(state => state.productsFilter); // filterStatus: 0 - All, 1 - Cars, 2 - Suvs and Crossovers, 3 - Minivan and truck
    

    const filterProducts = (products, filterStatus) => { 
        switch (filterStatus) {
            case 0:
                return products;
            case 1:
                return products.filter(products => products.category === 'cars');
            case 2:
                return products.filter(products => products.category === 'suvs/crossovers');
            case 3:
                return products.filter(products => products.category === 'minivans/trucks');
            default:
                return products;
        }
    }
    const makeProducts = (filteredProducts) => {
        return (
            filteredProducts.map(product => {
                return (
                 <Grid  item xs={12} sm={6} lg={4} key={product.model}>
                     <div className='productCardTest'>
                        <ProductCard key={product.key} 
                            productKey={product.key} 
                            model={product.model} 
                            price={product.price} 
                            description={product.description} 
                            imageUrl={product.imageUrl} 
                        />
                    </div>
                 </Grid>
                );
             })
        );
    }


    let productsToJSX = null;

    if(!testMode){

        if(fetchStatus <= 1) { 
            return <Preloader />;
        }

        if(fetchStatus === 2) {
            return <Error />;
        }

        if(fetchStatus === 3) {
            let filteredProducts = filterProducts(fetchData, filterStatus);
            productsToJSX = makeProducts(filteredProducts)
        }

    } else {    //тут отработает test renderer
        let filteredProducts = filterProducts(testProductsList, testFilterStatus);
        productsToJSX = makeProducts(filteredProducts);
    }

    return (
        <Grid item container>
            <Grid item xs={1} sm={2} />
            <Grid item xs={10} sm={8}>
                <Typography gutterBottom align='left' variant='h5' component='h1' color={'primary'}>
                    Honda Vehicle Lineup
                </Typography>
            </Grid>
            <Grid item xs={1} sm={2} />

            <Grid item xs={1} sm={2} md={2} />
            <Grid item  xs={10} sm={8} md={8}>

                <ProductsFilter />

            </Grid>
            <Grid item xs={1} sm={2} md={2} />
            
            {isMobile &&
            <Grid item container justify={'center'} align={'center'} >
            
                <Grid item  sm={1} md={2} />
                <Grid item container spacing={3} xs={12} sm={10} md={8}>
                    { productsToJSX }
                </Grid>
                <Grid item  sm={1} md={2} />
            </Grid>
            }

            {!isMobile &&
            <Grid item container >
            
                <Grid item  sm={1} md={2} />
                <Grid item container spacing={3} xs={12} sm={10} md={8}>
                    { productsToJSX }
                </Grid>
                <Grid item  sm={1} md={2} />
            </Grid>
            }
            
        </Grid>
    );
}

ProductCard.propTypes = {
    testMode: PropTypes.bool,
    testProductsList: PropTypes.array,
    testFilterStatus: PropTypes.number
};
     
export default Products;
