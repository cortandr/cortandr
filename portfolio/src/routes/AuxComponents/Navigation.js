import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import Typography from '@material-ui/core/Typography/index';
import Button from '@material-ui/core/Button/index';
import '../fonts.css';
import {withRouter} from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        marginLeft: 200,
        cursor: 'pointer'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Navigation extends React.Component{
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar
                    position="fixed"
                    style={{
                        backgroundColor: 'white',
                        // opacity: 0.5,
                        color: '#4885ed',
                        boxShadow: 'none',
                    }}
                >
                    <Toolbar>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.grow}
                            onClick={() => this.props.history.push('/')}
                        >
                            Andrea Cortoni
                        </Typography>
                        <Button color={'inherit'}>About</Button>
                        <Button color={'inherit'} onClick={() => this.props.history.push('/resume')}>Resume</Button>
                        <Button color={'inherit'} onClick={() => this.props.history.push('/projects')}>Projects</Button>
                        <Button color={'inherit'} style={{marginRight: 200}}>Contact</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Navigation));