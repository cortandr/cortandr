import React from 'react';
import Grid from '@material-ui/core/Grid/index';
import SocialMediaIcons from 'react-social-media-icons';
import './footer.css';


const socialMediaIcons = [
    {
        url: 'https://github.com/cortandr',
        className: 'fa-github',
    },
    {
        url: 'https://www.linkedin.com/in/andrea-cortoni-8a9b74116/',
        className: 'fa-linkedin',
    },
    {
        url: 'https://twitter.com/Cortandr',
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
                      backgroundColor: '#f9fbfd',
                      height: 200,
                      marginTop: 50
                  }}
            >
                <Grid container>
                    <Grid item xs={6}>
                        <p className={'contact'}>
                            If you want to get in touch send an email to
                            <span className={'email'}> <a href="mailto:cortandr95@gmail.com">cortandr95@gmail.com</a></span>
                        </p>
                    </Grid>
                    <Grid item xs={6}>
                        <p className={'update'}>
                            Last updated on June 7th 2019
                        </p>
                        <SocialMediaIcons
                            icons={socialMediaIcons}
                            iconSize={'1.3em'}
                            iconColor={'#A9A9A9'}
                        />
                    </Grid>
                </Grid>
                <Grid container justify={'center'} style={{backgroundColor: '#f9fbfd'}}>
                    <Grid item>
                        <p className={'copyright'}>
                            Design and built by ©Andrea Cortoni
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        );
    };
}

export default Footer;
