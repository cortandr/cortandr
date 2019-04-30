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
                        <span className={'email'}> cortandr95@gmail.com</span>
                    </p>
                </Grid>
                <Grid item xs={6}>
                    <p className={'update'}>
                        Last updated on April 30th 2019
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