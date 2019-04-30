import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/index';
import Chip from '@material-ui/core/Chip/index';
import SocialMediaIcons from 'react-social-media-icons';
import './footer.css';


const socialMediaIcons = [
    {
        url: 'https://github.com/andrewgbliss',
        className: 'fa-github',
    },
    {
        url: 'https://gitlab.com/andrewgbliss',
        className: 'fa-linkedin',
    },
    {
        url: 'https://www.npmjs.com/~andrewgbliss',
        className: 'fa-twitter',
    },
];


class Footer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            work_name: ""
        }
    }

    render() {

        let date = new Date();
        let month = date.toLocaleString('en-us', { month: 'long' });
        let day = date.getDate();
        let year = date.getFullYear();

        return (
            <Grid container
                  justify={'center'}
                  style={{
                      backgroundColor: '#F8F8F8',
                      height: 250,
                      marginTop: 100
                  }}
            >
                <Grid item xs={6}>
                    <p className={'contact'}>
                        If you want to get in touch send an email to
                        <span className={'email'}> <a href="mailto:cortandr95@gmail.com">cortandr95@gmail.com</a></span>
                    </p>
                </Grid>
                <Grid item xs={6}>
                    <p className={'update'}>
                        Last updated on {month} {day}th {year}
                    </p>
                    <SocialMediaIcons
                        icons={socialMediaIcons}
                        iconSize={'1.3em'}
                        iconColor={'#A9A9A9'}
                    />
                </Grid>
            </Grid>
        );
    };
}

export default Footer;