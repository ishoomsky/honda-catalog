import React from 'react';

import { withRouter } from 'react-router-dom';

import { Grid, Typography, Paper, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=> ({
    mainFeatures: {
        height: '100vh',
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    mainFeaturesContent: {
        backgroundColor: '#007cc0',
        opacity: '.8',
        position: 'relative',
        top: '20px',
        padding: theme.spacing(3),
    }
  }));

function Home(props) {
    const classes = useStyles();
    const { history } = props;

    
    return (
        <Grid item container justify={'center'}>
            <Grid item xs={12} sm={12}>
                <Paper className={classes.mainFeatures}
                    style={{backgroundImage: `url(https://delivery.contenthub.honda.com.au/api/public/content/0fe817dac44446f98e10cf4506fb9768?v=bccee4fc)`}}
                >
                    <Container fixed>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesContent}>
                                    <Typography  
                                    component='h1'
                                    variant='h5'
                                    color='inherit'
                                    gutterBottom
                                    >
                                        DISCOVER HONDA AUTOMOBILES
                                    </Typography>
                                    <Typography  
                                    component='h5'
                                    variant='body1'
                                    color='inherit'
                                    paragraph
                                    >
                                        Be a part of the Honda family and book your Honda now or get help with our expert financial advisors.
                                    </Typography>
                                    <Button variant='contained' color='secondary' onClick= {() => history.push('/products')}>
                                        Explore Honda cars
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default withRouter(Home);
