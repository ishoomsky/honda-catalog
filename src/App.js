import React, { useEffect } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { productsThunkActions  } from './redux/thunks/productsThunkActions';

import { Grid } from '@material-ui/core';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Breadcrumbs from './components/Breadcrumbs';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( productsThunkActions( dispatch ) );
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">

      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Breadcrumbs />
        </Grid>

        <Grid item>
          <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/products" exact component={ Products } />
              <Route path="/about" component={ About } />
              <Route path="/products/:key" component={ ProductDetail } />
          </Switch>
        </Grid>


      </Grid>
      </div>

    </BrowserRouter>

    

  );
}

export default App;
