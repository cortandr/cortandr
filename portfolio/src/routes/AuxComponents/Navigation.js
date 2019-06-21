import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import Typography from '@material-ui/core/Typography/index';
import Button from '@material-ui/core/Button/index';
import '../fonts.css';
import Grid from '@material-ui/core/Grid';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import {withRouter} from "react-router-dom";
import './navigation.css';
import {List, ListItem} from "@material-ui/core";

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

    constructor(props) {
        super(props);
        this.state = {
            drawer: false
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar
                    id={'full_bar'}
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
                        <Button className={'navtext'} color={'inherit'} onClick={() => this.props.history.push('/about')}>About</Button>
                        <Button className={'navtext'} color={'inherit'} onClick={() => this.props.history.push('/resume')}>Resume</Button>
                        <Button className={'navtext'}
                                color={'inherit'}
                                style={{marginRight: 200}}
                                onClick={() => this.props.history.push('/projects')}>Projects</Button>
                    </Toolbar>
                </AppBar>
                <Grid container id={'mobile_bar'} style={{marginTop: 20}}>
                    <Grid item xs={10}>
                        <h1 style={{textAlign: "left", cursor: "pointer", width: 30, marginLeft: 10}} onClick={() => this.props.history.push('/')}>AC</h1>
                    </Grid>
                    <Grid item xs={1}>
                        <Button>
                            <MenuIcon onClick={() => this.setState({drawer: true})}/>
                        </Button>
                    </Grid>
                    <Drawer open={this.state.drawer} onClose={() => this.setState({drawer: false})}>
                        <List>
                            <ListItem>
                                <Button className={'navtext'} color={'inherit'} onClick={() => this.props.history.push('/about')}>About</Button>
                            </ListItem>
                            <ListItem>
                                <Button className={'navtext'} color={'inherit'} onClick={() => this.props.history.push('/resume')}>Resume</Button>
                            </ListItem>
                            <ListItem>
                                <Button className={'navtext'}
                                        color={'inherit'}
                                        style={{marginRight: 200}}
                                        onClick={() => this.props.history.push('/projects')}>Projects</Button>
                            </ListItem>
                        </List>
                    </Drawer>
                </Grid>
            </div>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Navigation));
