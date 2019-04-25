import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './fonts.css';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        marginLeft: 200
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function Navigation(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: '#F8F8F8',
                    // opacity: 0.5,
                    color: '#4885ed',
                    boxShadow: 'none',
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.grow}>
                        Andrea Cortoni
                    </Typography>
                    <Button color={'inherit'}>About</Button>
                    <Button color={'inherit'}>Resume</Button>
                    <Button color={'inherit'} onClick={() => props.action()}>Work</Button>
                    <Button color={'inherit'} style={{marginRight: 200}}>Contact</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);