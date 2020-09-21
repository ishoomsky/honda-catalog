import React from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Grid, AppBar, Toolbar, IconButton, MenuItem, Menu, Button } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import logo from '../media/header/hondalogowhite.svg';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            flexGrow: 2,
        }
    },
    flexEnd: {
        justifyContent: 'flex-end'
    }

}));

function Header(props) {
    const { history } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs')); 
    

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClick = (pageUrl) => {
        history.push(pageUrl);
        setAnchorEl(null);
    };
    const handleButtonClick = (pageUrl) => {
        history.push(pageUrl);
    }

    const routes = [
        {url: '/', name: 'Home'},
        {url: '/products', name: 'Catalog'},
        {url: '/about', name: 'About'}
    ];

    let navMenuContent = routes.map((route) => {
        return <Button style={{display: 'inline-block', margin: 0, marginBottom: '-2px', padding: 0, boxSizing: 'content-box'}} key={route.name} variant={'text'} size={'small'} color={'inherit'} onClick={() => handleButtonClick( route.url )}> {route.name} </Button>;
    })
    
    let burgerMenuContent = routes.map((route) => {
        return <MenuItem key={route.name} onClick={() => handleMenuClick( route.url )}>{route.name}</MenuItem>;
    })


    return (
        <div className={classes.root}>
            <AppBar position={'static'}>
                <Grid container>

                    <Grid item xs={1} sm={2} />
                    <Grid item xs={10} sm={8}>
                        <Toolbar disableGutters={ true }>
                            <Grid container>
                                <Grid item xs={8} sm={4}>
                                    <img src={logo} width={'60px'} alt={'Honda Automobiles'} />
                                </Grid>

                                    {isMobile 
                                    &&
                                    <>
                                    <Grid container justify={'flex-end'} alignItems={'center'} item xs={4} sm={4}>
                                        <Grid item>
                                            <IconButton
                                            edge="start" 
                                            className={classes.menuButton} 
                                            color="inherit" 
                                            aria-label="menu"
                                            onClick={handleMenu}
                                            >
                                                <MenuIcon />
                                            </IconButton>

                                            <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={()=> setAnchorEl(null)}
                                            >

                                                { burgerMenuContent }

                                            </Menu>
                                        </Grid>
                                    </Grid>
                                    </>}
                                    
                                    {!isMobile
                                     &&
                                     <Grid container className={classes.flexEnd} justify='flex-end' alignItems='center' item xs={6} sm={8}>
                                        <Grid item>
                                             { navMenuContent }
                                        </Grid>
                                    </Grid>
                                    }

                            </Grid>
                        </Toolbar>
                    </Grid>
                    <Grid item xs={1} sm={2}></Grid>

                </Grid>
            </AppBar>
      </div>
    );
}

export default withRouter(Header);