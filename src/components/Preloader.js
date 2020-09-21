import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import hondaLoading from '../media/preloader/honda_loading.gif';

const useStyles = makeStyles({
    preloaderImageStyles: {
      marginTop: '100px',
    },
});

function Preloader() {
    const classes = useStyles();

    return (
      <Grid  align='center' item xs={12} sm={12} lg={12}>
          <img className={ classes.preloaderImageStyles } src={hondaLoading} alt="Загрузка.." />
      </Grid>
    );
}

export default Preloader;
