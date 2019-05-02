import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from './AuxComponents/Navigation';
import Pic from './local_images/AC_PHOTO.jpg';
import scrollToComponent from 'react-scroll-to-component';
import Fade from '@material-ui/core/Fade';
import Particles from 'react-particles-js';
import './fonts.css';
import SocialMediaIcons from "react-social-media-icons";
import './AuxComponents/footer.css';

const socialMediaIcons = [
    {
        url: 'https://github.com/cortandr',
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

class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isHide: false,
        };

        this.scrollTo = this.scrollTo.bind(this);
    }

    scrollTo() {
        scrollToComponent(this.Work, { offset: -50, align: 'top', duration: 1500})
    }


    render() {
        const work_list = ['mas', 'dots', 'viw', 'MovieRec', 'SpeedPred'];

        return (
            <Grid container justify={'center'} style={{overflowY: 'hidden'}}>
                <Navigation/>
                <div style={{width: '100%', height: '100vh', top: 0, left: 0, position: 'absolute', overflowY: 'hidden'}}>
                    <Particles
                        params={{
                            retina_detect: true,
                            particles: {
                                line_linked: {
                                    enable: true,
                                    distance: 150,
                                    color: "#4885ed",
                                    opacity: 0.4,
                                    width: 1
                                },
                                number: {
                                    value: 70
                                },
                                color: {
                                    value: "#4885ed"
                                },
                                size: {
                                    value: 3
                                }
                            }
                        }}
                    />
                </div>
                <Grid
                    container
                    justify={'center'}
                    style={{
                        height: '100vh',
                        verticalAlign: 'middle',
                        position: 'relative'
                    }}>
                    <Grid container justify={'center'}>
                        <Grid item xs={5}>
                            <Grid container alignItems={'vertical'} style={{marginTop: 260}}>
                                <Grid item style={{height: 70}}>
                                    <Fade in timeout={1000}>
                                        <h1 style={{
                                            color: '#4885ed',
                                            fontSize: 40,
                                        }}>
                                            Ciao, I'm Andrea.</h1>
                                    </Fade>
                                </Grid>
                                <Fade in timeout={3000}>
                                    <Grid item>
                                        <p style={{
                                            fontSize: 20,
                                        }}>
                                            I'm a Software Engineer with a strong passion for Machine Learning and its incredible potential.
                                        </p>
                                        <p style={{
                                            fontSize: 15,
                                        }}>
                                            Former Software Engineering Intern at
                                            <span style={{fontSize: 20, color: '#cc0000'}}> TESLA </span>,
                                            <span style={{fontSize: 20, color: '#006699'}}> IBM</span>,
                                            embedded software developer at
                                            <span style={{fontSize: 20, color: '#8FD1F7'}}> ISMB</span>.
                                        </p>
                                    </Grid>
                                </Fade>
                            </Grid>
                            <Fade in timeout={3000}>
                                <div>
                                    <SocialMediaIcons
                                        icons={socialMediaIcons}
                                        iconSize={'1.3em'}
                                        iconColor={'#A9A9A9'}
                                    />
                                </div>
                            </Fade>
                        </Grid>
                        <Grid item xs={3}>
                            <Fade in timeout={1000}>
                                <img
                                    src={Pic}
                                    alt={'pic'}
                                    height={300}
                                    width={300}
                                    style={{borderRadius: '50%', marginTop: 250}}
                                />
                            </Fade>
                        </Grid>
                    </Grid>
                    <Grid container justify={'center'} style={{height: 10}}>
                        <Grid item xs={2} style={{textAlign: 'center', color: "lightgray", marginTop: 100}}>
                            ©Andrea Cortoni
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    };
}

export default Home;