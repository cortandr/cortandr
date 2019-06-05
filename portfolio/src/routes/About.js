import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from './AuxComponents/Navigation';
import { withRouter } from 'react-router-dom';
import './fonts.css';
import Footer from './AuxComponents/Footer';
import ABOUT from './local_images/about_pic.JPG';
import Fade from '@material-ui/core/Fade';
import './about.css';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import YouTube from 'react-youtube';
import Recommendations from './AuxComponents/recommendations';
import Photos from './AuxComponents/photo_gallery';
import ScrollAnimation from 'react-animate-on-scroll';


const youtube = [
    {
        'title': '',
        'description': '',
        'id': '_9s5849o1f0',
        animation_type: 'bounceInLeft'
    },
    {
        'title': '',
        'description': '',
        'id': '2a-Lpnqi5zQ',
        animation_type: 'bounceInRight'
    }
];

const languages = [
    {
        title: 'Python',
        icon: <img src="https://img.icons8.com/color/150/000000/python.png"/>,
        list: [
            "Django", "Flask"
        ],
        animation_type: 'bounceInLeft'
    },
    {
        title: 'JavaScript',
        icon: <img src="https://img.icons8.com/color/150/000000/javascript.png"/>,
        list: [
            "React", "ES6", "Node/Express", "Electron"
        ],
        animation_type: 'bounceInUp'
    },
    {
        title: 'Others',
        icon: <img src="https://img.icons8.com/color/150/000000/connection-status-off.png"/>,
        list: [
            "Scala", "Java", "C", "Docker", "MongoDB", "SQL"
        ],
        animation_type: 'bounceInRight'
    },
];

const machine_learning = [
    {
        title: 'Libraries',
        icon: <img src="https://img.icons8.com/ios/150/000000/mind-map.png"/>,
        list: [
            "Tensorflow", "Keras", "Numpy", "Pandas", "OpenCV", "NLTK", "Scikit-Learn"
        ],
        animation_type: 'bounceInLeft'
    },
    {
        title: 'Applications',
        icon: <img src="https://img.icons8.com/dotty/150/000000/for-experienced.png"/>,
        list: [
            "Computer Vision", "Natural Language Processing", "Data Science",
            "Reinforcement Learning", "Multi Agent Systems", "Information Retrieval"
        ],
        animation_type: 'bounceInUp'
    },
    {
        title: 'Others',
        icon: <img src="https://img.icons8.com/color/150/000000/connection-status-off.png"/>,
        list: [
            "SVM", "CNN", "LSTM", "Sentiment Analysis", "DQN", "Ensembles"
        ],
        animation_type: 'bounceInRight'
    },
];


class About extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '300',
            width: '420',
        };
        return (
            <Grid container justify={'center'}>
                <Navigation/>
                <Grid container justify={'center'} style={{marginTop: 80}}>
                    <Grid item xs={12}>
                        <Fade in>
                            <h1 style={{color: '#4885ed', textAlign: 'center'}}>About Me</h1>
                        </Fade>
                    </Grid>
                </Grid>
                <Grid container justify={'center'} style={{marginTop: 50, marginRight: 100, marginLeft: 100}}>
                    <Grid item xs={5}>
                        <ScrollAnimation animateIn={'bounceInLeft'} animateOut={'fadeOut'}>
                            <img
                                src={ABOUT}
                                alt={'about_pic'}
                                height={400}
                                width={'auto'}
                                style={{borderRadius: '3%', boxShadow: '3px 3px 3px 3px #F8F8F8'}}
                            />
                        </ScrollAnimation>
                    </Grid>
                    <Grid item xs={4} style={{marginTop: 50}}>
                        <ScrollAnimation animateIn={'bounceInRight'} animateOut={'fadeOut'}>
                            <p className={'about'}>
                                Currently pursuing a Master of Science in Artificial Intelligence at KU Leuven, Belgium.
                                Throughout my academic career I've gained many technical skills as well as the ability
                                to adapt myself in any kind of scenario.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn={'bounceInRight'} animateOut={'fadeOut'}>
                            <p className={'about'}>
                                I'm a creative and innovative person with continuous aim to surpass set objectives
                                and with optimal interpersonal skills to cooperate and lead cross-functional
                                teams within diverse environments.
                            </p>
                        </ScrollAnimation>
                    </Grid>
                </Grid>
                <Grid container justify={'center'}
                      style={{
                          backgroundColor: '#f9fbfd',
                          marginTop: 80,
                          height: 1100}}>
                    <Grid container justify={'center'} style={{marginRight: 50, marginLeft: 50}}>
                        <ScrollAnimation animateIn={'flipInX'} animateOut={'fadeOut'}>
                            <Grid container justify={'center'} style={{marginTop: 20}}>
                                <Grid item xs={12}>
                                    <h1 style={{color: '#4885ed', textAlign: 'center'}}>Skills</h1>
                                </Grid>
                            </Grid>
                        </ScrollAnimation>
                        <Grid container justify={'center'}>
                            <ScrollAnimation animateIn={'flipInX'} animateOut={'fadeOut'}>
                                <Grid container justify={'center'}>
                                    <Grid item>
                                        <h3 style={{color: '#4885ed', textAlign: 'center'}}>Software Development</h3>
                                    </Grid>
                                </Grid>
                            </ScrollAnimation>
                            <Grid container justify={'center'} spacing={32}>
                                {languages.map((l, i) => {
                                    return (
                                        <Grid item>
                                            <ScrollAnimation animateIn={l.animation_type} animateOut={'fadeOut'}>
                                                <Card style={{width: 300, height: 380}}>
                                                    <Grid container justify={'center'}
                                                          style={{
                                                              marginBottom: 20,
                                                              marginTop: 20
                                                          }}>
                                                        <Grid item>
                                                            {l.icon}
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container justify={'center'}>
                                                        <Grid item>
                                                            <h4 style={{height: 10}}>{l.title}</h4>
                                                        </Grid>
                                                    </Grid>
                                                    <CardContent>
                                                        {l.list.map((item, j) => {
                                                            return (
                                                                <p style={{height: 5, textAlign: 'center'}}>{item}</p>
                                                            )
                                                        })}
                                                    </CardContent>
                                                </Card>
                                            </ScrollAnimation>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid container justify={'center'}>
                            <ScrollAnimation animateIn={'flipInX'} animateOut={'fadeOut'}>
                                <Grid container justify={'center'}>
                                    <Grid item>
                                        <h3 style={{color: '#4885ed', textAlign: 'center', marginTop: 30}}>Machine Learning</h3>
                                    </Grid>
                                </Grid>
                            </ScrollAnimation>
                            <Grid container justify={'center'} spacing={32}>
                                {machine_learning.map((ml, i) => {
                                    return (
                                        <Grid item>
                                            <ScrollAnimation animateIn={ml.animation_type} animateOut={'fadeOut'}>
                                                <Card style={{width: 300, height: 380}}>
                                                    <Grid container justify={'center'}
                                                          style={{
                                                              marginBottom: 20,
                                                              marginTop: 20
                                                          }}>
                                                        <Grid item>
                                                            {ml.icon}
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container justify={'center'}>
                                                        <Grid item>
                                                            <h4 style={{height: 10}}>{ml.title}</h4>
                                                        </Grid>
                                                    </Grid>
                                                    <CardContent>
                                                        {ml.list.map((item, j) => {
                                                            return (
                                                                <p style={{height: 5, textAlign: 'center'}}>{item}</p>
                                                            )
                                                        })}
                                                    </CardContent>
                                                </Card>
                                            </ScrollAnimation>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Recommendations/>
                <Grid container justify={'center'} style={{backgroundColor: '#f9fbfd'}}>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 20, marginBottom: 30}}>
                            <Grid item xs={12}>
                                <ScrollAnimation animateIn={'flipInX'} animateOut={'fadeOut'}>
                                    <h1 style={{color: '#4885ed', textAlign: 'center'}}>Adventures</h1>
                                </ScrollAnimation>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Grid container justify={'center'} style={{marginRight: 50, marginLeft: 50, marginBottom: 30}}>
                        <Grid container justify={'center'} spacing={32}>
                            {youtube.map((v, i) => {
                                return (
                                    <Grid item>
                                        <ScrollAnimation animateIn={v.animation_type} animateOut={'fadeOut'}>
                                            <YouTube
                                                videoId={v.id}
                                                opts={opts}
                                                onReady={this._onReady}
                                            />
                                        </ScrollAnimation>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
                <Photos/>
                <Footer/>
            </Grid>
        );
    };
}

export default withRouter(About);
