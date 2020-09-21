import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 250,
  },
  linkStyles:{
    textDecoration:'none',
  }
});

const ProductCard = (props) => {
  const classes = useStyles();

  const {model, imageUrl, price, productKey, history} = props;

  const handleCardActionAreaClick = () => {
    setTimeout(() => {
      history.push(`/products/${ productKey }`); //200мс для анимации клика
    }, 200);
  }

    return (
      <Card className={classes.root}>
        <CardActionArea onClick={handleCardActionAreaClick}>
          <CardMedia
            className={classes.media}
            image={ imageUrl }
            title={ model }
          />
          <CardContent>
            <Typography align={"center"} gutterBottom variant="h5" component="h2">
              { model }
            </Typography>
            <Typography align={"center"} variant="body1" color="textSecondary" component="p">
              { price }
            </Typography>
          </CardContent>
        </CardActionArea>
        
        <CardActions>
          <Grid container >
            <Grid item>

              <Link className={classes.linkStyles} color={'primary'} to={`/products/${ productKey }`}>
                <Button endIcon={<ArrowRightOutlinedIcon />} variant={'outlined'} size="small" color="primary">
                  <Typography align={"center"} variant="body1" color="primary" component="span">
                    Details..
                  </Typography>
                </Button>
              </Link>

            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
};

ProductCard.propTypes = {
  model: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  productKey: PropTypes.string.isRequired,
};

export default withRouter(ProductCard);