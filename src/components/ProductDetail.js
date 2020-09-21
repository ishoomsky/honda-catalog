import React from 'react';

import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, CardMedia } from '@material-ui/core';

import Preloader from './Preloader';
import Error from './Error';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
    textContainer: {
        marginBottom: '2vh'
    },
    specContent: {
        color: '#FFF',
        backgroundColor: '#007cc0',
        position: 'relative',
        padding: theme.spacing(3),
    }
  }));
  

function ProductDetail( match ) {
    const routerProductId = match.match.params.key; //props from router    
    const reduxState = useSelector(state => state.products);
    
    const classes = useStyles();
    const specVariant = 'body1';

    if(reduxState.status <= 1) {
        return <Preloader />;
    }

    if(reduxState.status === 2) {
        return <Error />;
    }

    let productData = null;
    (reduxState.status === 3) && ( productData = reduxState.data.find(item=>item.key === routerProductId) );

    return (
        <Grid item container justify={'center'}>        
            <Grid item xs={2} sm={2} />
            <Grid item xs={8} sm={8}>
                <Typography gutterBottom align='left' variant='h5' component='h1' color={'primary'}>
                {`${productData.brand} ${productData.model}`}
                </Typography>
            </Grid>
            <Grid item xs={2} sm={2} />
            
            <Grid item container xs={12} sm={8} lg={4}>
                <CardMedia
                component='img'
                image= { productData.imageUrl }
                title= {`${productData.brand} ${productData.model}`}
                />
            </Grid>
            <Grid item lg={1} />

                <Grid className={classes.textContainer} container alignItems="center" item xs={12} sm={8} lg={4}>
                    <Grid item>
                    <div className={classes.specContent}>
                        <Typography align='justify' variant={'h4'}>
                            {`${productData.model} specs:`}
                        </Typography>       
                        <Typography align='justify' variant={'h6'}>
                            {`Engine: `}
                            <Typography component={"span"} variant={specVariant} color='inherit' display="inline">{productData.description.engine}</Typography>
                        </Typography>       
                        <Typography align='justify' variant={'h6'}>
                            {`Drivetrain: `}
                            <Typography component={"span"} variant={specVariant} color='inherit' display="inline">{productData.description.driveTrain}</Typography>
                        </Typography>       
                        <Typography align='justify' variant={'h6'}>
                            {`Fuel economy: `}
                            <Typography component={"span"} variant={specVariant} color='inherit' display="inline">{productData.description.fuelEconomy}</Typography>
                        </Typography>       
                        <Typography align='justify' variant={'h6'}>
                            {`Transmission: `}
                            <Typography component={"span"} variant={specVariant} color='inherit' display="inline">{productData.description.transmission}</Typography>
                        </Typography>       
                        <Typography align='justify' variant={'h6'}>
                            {`Seating capacity: `}
                            <Typography component={"span"} variant={specVariant} color='inherit' display="inline">{productData.description.seatingCapacity}</Typography>
                        </Typography>       
                        <Typography align='justify' variant={'h6'}>
                            {`Price: `}
                            <Typography component={"span"} variant={specVariant} color='inherit' display="inline">{productData.price}</Typography>
                        </Typography>
                        </div>
                    </Grid>
                </Grid>

            
            <Grid item xs={10} sm={8} lg={8}>
                <Typography gutterBottom align='left' variant='body2'>
                    {`${productData.description.about}`}
                </Typography>
            </Grid>     
        </Grid>
    );
}

export default ProductDetail;
