import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from './AuxComponents/Navigation';
import { withRouter } from 'react-router-dom';
import './fonts.css';
import Footer from './AuxComponents/Footer';
import ABOUT from './local_images/about_pic.JPG';
import Fade from '@material-ui/core/Fade';
import './about.css';
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const skills = [
    {
        "title": "Machine Learning",
        "list": [
            "Neural Networks", "Tensorflow", "Keras", "Sci-Kit Learn", "Numpy", "Pandas",
            "Deep Learning", "Reinforcement Learning", "Computer Vision"
        ]
    },
    {
        "title": "Software Development",
        "list": [
            "Python", "Django", "Flask", "Celery",
            "JavaScript", "React", "NodeJS", "Express",
            "MongoDB"
        ]
    },
    {
        "title": "Soft Skills",
        "list": ["Music", "Photography", "Public Speaking", "Tennis", "Cycling"]
    },
];

class About extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Grid container justify={'center'}>
                <Navigation/>
                <Fade in timeout={1000}>
                    <Grid container justify={'center'} style={{marginTop: 80}}>
                        <Grid item xs={12}>
                            <h1 style={{color: '#4885ed', textAlign: 'center'}}>About Me</h1>
                        </Grid>
                    </Grid>
                </Fade>
                <Grid container justify={'center'} style={{marginTop: 50}}>
                    <Grid item xs={5}>
                        <Fade in timeout={1000}>
                            <img
                                src={ABOUT}
                                alt={'about_pic'}
                                height={500}
                                width={'auto'}
                                style={{borderRadius: '3%'}}
                            />
                        </Fade>
                    </Grid>
                    <Grid item xs={4}>
                        <Fade in timeout={1000}>
                            <p className={'about'}>
                                Currently pursuing a Master of Science in Artificial Intelligence at KU Leuven, Belgium.
                                I'm an energetic, cross-cultural Electronic Engineer from Polytechnic of Turin.
                                Highly creative and open minded student highly capable of working in teams.
                            </p>
                        </Fade>
                        <Fade in timeout={1000}>
                            <p className={'about'}>
                                I'm a Software Engineer with a passion for Machine Learning.
                                I strongly believe in human intelligence augmentation through the use of AI.
                            </p>
                        </Fade>
                    </Grid>
                </Grid>
                <Grid container justify={'center'} style={{backgroundColor: '#F8F8F8', marginTop: 80, height: 600}}>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <h1 style={{color: '#4885ed', textAlign: 'center'}}>Skills</h1>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Grid container justify={'center'}
                          style={{marginTop: 10, marginRight: 100, marginLeft: 100}}
                          spacing={32}
                    >
                        {skills.map((item, i) => {
                            return (
                                <Grid item xs={4}>
                                    <Fade in timeout={1000}>
                                        <Card style={{height: 400}}>
                                            <CardContent style={{textAlign: 'center'}}>
                                                <Typography variant="h5" component="h2" style={{color: '#4885ed'}}>
                                                    {item.title}
                                                </Typography>
                                                {item.list.map((s, k) => {
                                                    // return <p>{s}</p>
                                                    return (
                                                        <Grid container justify={"center"} style={{marginTop: 10}}>
                                                            <Grid item xs={12}>
                                                                <Chip
                                                                    label={s}
                                                                    style={{
                                                                        textAlign: 'center',
                                                                        marginRight: 5,
                                                                        height: 25,
                                                                        borderColor: '#4885ed',
                                                                        color: '#4885ed',
                                                                        fontWeight: 'bold'
                                                                    }}
                                                                    variant="outlined"/>
                                                            </Grid>
                                                        </Grid>
                                                    )
                                                })}
                                            </CardContent>
                                        </Card>
                                    </Fade>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
                <Footer/>
            </Grid>
        );
    };
}

export default withRouter(About);