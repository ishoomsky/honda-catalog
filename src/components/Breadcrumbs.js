import React from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { 
  Breadcrumbs as MUIBreadcrumbs,
  Grid,
  Link,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  breadcrumbStyle: {
    fontSize: '14px',
    cursor: 'pointer'
  },
});


function Breadcrumbs(props) {
  const classes = useStyles();

  const { 
    history, 
    location : { pathname } 
  } = props;

  const pathnames = pathname.split('/').filter(x => x); //filter фильтрует пустые айтемы

  const renderLinks = pathnames.map((name, index) => {
    const routeTo = `/${pathnames
      .slice(0, index + 1)
      .join('/')}`;

    if (index === pathnames.length - 1) { //если это последний breadcrumb, ссылки быть не должно
      return <Typography className={classes.breadcrumbStyle} key={`${name}`}> { name.toString().toUpperCase() } </Typography>
    }
    return (
      <Link key={`${name}`} onClick={ () => history.push(routeTo) }>
        <Typography className={classes.breadcrumbStyle}> { name.toString().toUpperCase() } </Typography>
      </Link>
    );
  })

  return (
      <Grid item container>
        <Grid item xs={1} sm={2} />
        {/* <Grid item container  xs={12} sm={8} justify={'left'}> */}
        <Grid item container  xs={10} sm={8}>

        <MUIBreadcrumbs aria-label="breadcrumb">
          
          {(pathnames.length > 0)
          &&
          <Link onClick={ () => history.push('/') }><Typography className={classes.breadcrumbStyle}>HOME</Typography></Link>}

          { renderLinks }

        </MUIBreadcrumbs>

        </Grid>
        <Grid item xs={1} sm={2} />
      </Grid>
  );
}

export default withRouter(Breadcrumbs);