import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from './AuxComponents/Navigation';
import { withRouter } from 'react-router-dom';
import './fonts.css';
import Footer from './AuxComponents/Footer';
import MASDRL from "./local_images/masdrl.png";
import DOTS from "./local_images/dots.png";
import SPEED from "./local_images/speed.jpg";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Viw from './local_images/vimatom.png';
import Sentiment from './local_images/sentiment.jpg';
import ImageAI from './local_images/imageai.png';
import ScrollAnimation from 'react-animate-on-scroll';
import Chip from "@material-ui/core/Chip";


const work = [
    [{
        title: "Deep Reinforcement Learning for MAS",
        description: "A deep reinforcement learning framework applied to Pursuer/Evader world. The policy to be learned " +
            "aims on taking a team of agents to the victory by catching a team of evaders.",
        code: "https://github.com/cortandr/MASRL",
        img: MASDRL,
        more: "/masdrl",
        completed: 'Completed',
        c: '#009b7d',
        code_active: true,
        more_active: true,
        animation_type: 'bounceInLeft',
        code_tooltip: "Code",
        more_tooltip: "More",
        tags: ['Reinforcement Learning', 'Multi-Agent Systems', 'Residual Networks', 'CNN', 'Keras']
    },

    {
        title: "Deep Reinforcement Learning for Games",
        description: "Self play DQN algorithm aimed on learning how to play the game Dots and Boxes.",
        code: "https://github.com/cortandr/DotsAndBoxes_DeepRL",
        img: DOTS,
        more: "/dots",
        completed: 'Completed',
        c: '#009b7d',
        code_active: true,
        more_active: true,
        animation_type: 'bounceInRight',
        code_tooltip: "Coming Soon",
        more_tooltip: "More",
        tags: ['Reinforcement Learning', 'Self Play', 'CNN', 'Tensorflow', 'DQN']
    }],
    [{
        title: "Viw",
        description: "Vi(m) plugin for Atom.",
        img: Viw,
        code: "https://github.com/cortandr/Viw",
        more: "/viw",
        completed: 'Completed',
        c: '#009b7d',
        code_active: true,
        more_active: true,
        animation_type: 'bounceInLeft',
        code_tooltip: "Coming Soon",
        more_tooltip: "More",
        tags: ['Scala', 'Vim', 'FP', 'OOP']
    },
    {
        title: "ImageAI",
        description: "An application built to perform image analysis using state of the art deep learning techniques.",
        code: "",
        img: ImageAI,
        more: "",
        completed: 'In - Progress',
        c: '#4885ed',
        code_active: false,
        more_active: false,
        animation_type: 'bounceInRight',
        code_tooltip: "Coming Soon",
        more_tooltip: "Coming Soon",
        tags: [
            'Computer Vision', 'Classification', 'Segmentation', 'Detection', 'Keras',
            'Residual Networks', 'Skip Connections', 'YOLO', 'React', 'Django'
        ]
    }],
    [{
        title: "Speed Prediction",
        description: "Machine Leaning algorithm to predict vehicle speed from dash-cam video.",
        code: "#",
        img: SPEED,
        more: "#",
        completed: 'In - Progress',
        c: '#4885ed',
        code_active: false,
        more_active: false,
        animation_type: 'bounceInLeft',
        tags: ['Computer Vision', 'Optical Flow', 'CNN', 'Keras']
    },
    {
        title: "Sentiment Analysis",
        description: "Deep Learning models applied to Natural Language Processing for sentiment classification of Tweets.",
        code: "https://github.com/cortandr/SentimentAnalysis",
        img: Sentiment,
        more: "#",
        completed: 'Completed',
        c: '#009b7d',
        code_active: true,
        more_active: false,
        animation_type: 'bounceInRight',
        code_tooltip: "Code",
        more_tooltip: "Coming Soon",
        tags: ['NLP', 'LSTM', ' Text Classification', 'CNN', 'Keras']
    }],

];

class Projects extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Grid container justify={'center'}>
                <Navigation/>
                <Grid container justify={'center'} style={{paddingTop: 80}}>
                    <Grid item xs={12}>
                        <Fade in>
                            <h1 style={{color: '#4885ed', textAlign: 'center'}}>Projects</h1>
                        </Fade>
                    </Grid>
                </Grid>
                <Grid container style={{marginRight: 100, marginLeft: 100}}>
                    {work.map((row, i) => {
                        return (
                            <Grid container justify={'center'} style={{marginTop: 20}} spacing={32}>
                                {row.map((item, j) => {
                                    return (
                                        <Grid item xs={5}>
                                            <ScrollAnimation animateIn={item.animation_type} animateOnce>
                                                <Card style={{height: 470}}>
                                                    <div style={{height: 420}}>
                                                        <CardMedia
                                                            style={{height: 180, width: 'auto'}}
                                                            image={item.img}
                                                            title={item.title}
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="h2">
                                                                {item.title}
                                                            </Typography>
                                                            <Typography gutterBottom
                                                                        variant="p"
                                                                        component="p"
                                                                        style={{textAlign: 'right',
                                                                            fontSize: 13,
                                                                            marginTop: 10,
                                                                            marginBottom: 10
                                                                        }}
                                                            >
                                                                Status : <span style={{color: item.c}}>{item.completed}</span>
                                                            </Typography>
                                                            <Typography component="p" style={{height: 70}}>
                                                                {item.description}
                                                            </Typography>
                                                            <Typography component="h3">
                                                                Tags
                                                            </Typography>
                                                            {item.tags.map((s, j) => {
                                                                return (
                                                                    <Chip
                                                                        label={s}
                                                                        style={{
                                                                            marginRight: 5,
                                                                            height: 20,
                                                                            borderColor: '#4885ed',
                                                                            color: '#4885ed',
                                                                            fontSize: 10
                                                                        }}
                                                                        variant="outlined"
                                                                    />
                                                                )
                                                            })}
                                                        </CardContent>
                                                    </div>
                                                    <CardActions>
                                                        <Button size="small" style={{color: '#4885ed'}} disabled={!item.code_active}>
                                                            <a
                                                                href={item.code}
                                                                rel="noopener noreferrer"
                                                                target="_blank"
                                                                style={{color: "#4885ed", textDecoration: "none"}}>
                                                                Source Code
                                                            </a>
                                                        </Button>
                                                        <Button size="small"
                                                                style={{color: '#4885ed'}}
                                                                onClick={() => this.props.history.push(item.more)}
                                                                disabled={!item.more_active}
                                                        >
                                                            Learn More
                                                        </Button>
                                                    </CardActions>
                                                </Card>
                                            </ScrollAnimation>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        )
                    })}
                </Grid>
                <Footer/>
            </Grid>
        );
    };
}

export default withRouter(Projects);
