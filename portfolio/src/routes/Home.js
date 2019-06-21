import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from './AuxComponents/Navigation';
import Pic from './local_images/AC_PHOTO.jpg';
import scrollToComponent from 'react-scroll-to-component';
import Particles from 'react-particles-js';
import './fonts.css';
import './home.css';
import SocialMediaIcons from "react-social-media-icons";
import './AuxComponents/footer.css';
import ScrollAnimation from 'react-animate-on-scroll';

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
            <Grid container justify={'center'} style={{overflowY: 'hidden', overflowX: 'hidden', height: '100vh', width: '100%'}}>
                <Navigation/>
                <div id={'particle_background'}
                    style={{width: '100%', height: '100vh', top: 0, left: 0, position: 'absolute', overflowY: 'hidden'}}>
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
                        position: 'relative',
                        marginLeft: '200px', marginRight: '200px'
                    }}>
                    <Grid container justify={'center'} id={'profile_img_mobile'}>
                        <Grid item xs={7} alignContent={'center'}>
                            <ScrollAnimation animateIn={'zoomIn'}>
                                <img
                                    src={Pic}
                                    alt={'pic'}
                                    height={200}
                                    width={200}
                                    style={{
                                        borderRadius: '50%',
                                        // position: "absolute"
                                        marginTop: 20,
                                    }}
                                />
                            </ScrollAnimation>
                        </Grid>
                    </Grid>
                    <Grid container justify={'center'} id={'bio'}>
                        <Grid item xs={12} sm={8}>
                            <Grid container alignItems={'vertical'} id={'home_text'}>
                                <Grid item className={'title_mobile_item'}>
                                    <ScrollAnimation animateIn={'flipInX'}>
                                        <h1
                                            className={'maintitle title_mobile'}
                                            style={{
                                                color: '#4885ed'
                                        }}>
                                            Ciao, I'm Andrea.</h1>
                                    </ScrollAnimation>
                                </Grid>
                                <Grid item>
                                    <ScrollAnimation animateIn={'flipInX'}>
                                    <p className={'description'}>
                                        I'm a Software Engineer with a strong passion for Machine Learning and its incredible potential.
                                    </p>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn={'flipInX'}>
                                    <p className={'experience'}>
                                        Former Software Engineering Intern at
                                        <span style={{fontSize: 20, color: '#cc0000'}}> TESLA </span>,
                                        <span style={{fontSize: 20, color: '#006699'}}> IBM</span>,
                                        embedded software developer at
                                        <span style={{fontSize: 20, color: '#8FD1F7'}}> ISMB</span>.
                                    </p>
                                    </ScrollAnimation>
                                </Grid>
                            </Grid>
                            <ScrollAnimation animateIn={'flipInX'}>
                                <div>
                                    <SocialMediaIcons
                                        icons={socialMediaIcons}
                                        iconSize={'1.3em'}
                                        iconColor={'#A9A9A9'}
                                    />
                                </div>
                            </ScrollAnimation>
                        </Grid>
                        <Grid item xs={4}>
                            <ScrollAnimation animateIn={'zoomIn'}>
                                <img
                                    src={Pic}
                                    alt={'pic'}
                                    height={300}
                                    width={300}
                                    id={'profile_img'}
                                    style={{
                                        borderRadius: '50%',
                                        marginTop: 250,
                                        marginLeft: 20
                                    }}
                                />
                            </ScrollAnimation>
                        </Grid>
                    </Grid>
                    <Grid container justify={'center'} style={{height: 10}}>
                        <Grid item xs={6} sm={2} className={'copyright'} style={{textAlign: 'center', color: "lightgray"}}>
                            © Andrea Cortoni
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    };
}

export default Home;
