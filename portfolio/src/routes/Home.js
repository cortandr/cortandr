import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from './AuxComponents/Navigation';
import Pic from './local_images/AC_PHOTO.jpg';
import WorkItem from './AuxComponents/WorkItem';
import scrollToComponent from 'react-scroll-to-component';
import Fade from '@material-ui/core/Fade';
import './fonts.css';
import SocialMediaIcons from "react-social-media-icons";
import './AuxComponents/footer.css';
import Footer from './AuxComponents/Footer';

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
        const work_list = ['mas', 'dots', 'dots'];
        return (
            <Grid container justify={'center'}
                  // style={{overflowX: 'hidden'}}
            >
                <Navigation action={this.scrollTo}/>
                <Grid
                    container
                    justify={'center'}
                    // spacing={32}
                    style={{
                        backgroundColor: 'white',
                        height: '100vh',
                        verticalAlign: 'middle',
                    }}>
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
                            <Fade in timeout={1500}>
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
                        <SocialMediaIcons
                            icons={socialMediaIcons}
                            iconSize={'1.3em'}
                            iconColor={'#A9A9A9'}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <img
                            src={Pic}
                            alt={'pic'}
                            height={300}
                            width={300}
                            style={{borderRadius: '50%', marginTop: 250}}
                        />
                    </Grid>
                </Grid>
                <Grid container
                      style={{
                          backgroundColor: '#F8F8F8',
                          marginTop: 30
                      }}
                >
                    <Grid
                        container
                        alignItems={'flex-start'}
                        className={'Work'}
                        ref={(section) => { this.Work = section; }}>
                        <Grid item xs={4}>
                            <h1 style={{
                                color: '#4885ed',
                                fontSize: 40,
                                textAlign: 'center'
                            }}>
                                Work</h1>
                        </Grid>
                    </Grid>
                    {work_list.map((item, i) => {
                        return <WorkItem key={i} name={item}/>
                    })}
                </Grid>
                <Footer/>
            </Grid>
        );
    };
}

export default Home;