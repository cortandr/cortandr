import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/index';
import Chip from '@material-ui/core/Chip/index';


class Footer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            work_name: ""
        }
    }

    render() {
        return (
            <Grid container justify={'center'} style={{backgroundColor: '#F8F8F8', height: 200}}>
                <Grid item xs={6}>
                    <p></p>
                </Grid>
                <Grid item xs={6}>
                    <p>social buttons</p>
                </Grid>
            </Grid>
        );
    };
}

export default Footer;