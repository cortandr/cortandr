import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from './AuxComponents/Navigation';
import { withRouter, Link } from 'react-router-dom';
import './fonts.css';
import Footer from './AuxComponents/Footer';
import MASDRL from "./local_images/masdrl.png";
import DOTS from "./local_images/dots.png";
import SPEED from "./local_images/speed.jpg";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';


const work = [
    [{
        title: "Deep Reinforcement Learning for Multi Agent Systems",
        description: "A deep reinforcement learning framework applied to Pursuer/Evader world. The policy to be learned " +
            "aims on taking a team of agents to the victory by catching a team of evaders.",
        code: "https://github.com/cortandr/MASRL",
        img: MASDRL,
        more: ""
    },

    {
        title: "Deep Reinforcement Learning for Games",
        description: "Self play DQN algorithm aimed on learning how to play the game Dots and Boxes",
        code: "",
        img: DOTS,
        more: ""
    }],
    [{
        title: "Viw",
        description: "Vi(m) plugin for Atom",
        code: "",
        more: ""
    },
    {
        title: "Movies Recommendation System",
        description: "An application built to recommend movies upon user input",
        code: "",
        img: "",
        more: ""
    }],
    [{
        title: "Speed Prediction",
        description: "Machine Leaning algorithm to predict vehicle speed from dash-cam video",
        code: "",
        img: SPEED,
        more: ""
    }]
];

class Projects extends React.Component{
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
                            <h1 style={{color: '#4885ed', textAlign: 'center'}}>Projects</h1>
                        </Grid>
                    </Grid>
                </Fade>
                <Grid container style={{marginRight: 100, marginLeft: 100}}>
                    {work.map((row, i) => {
                        return (
                            <Fade in timeout={(i+1)*2000}>
                                <Grid container justify={'center'} style={{marginTop: 20}} spacing={32}>
                                    {row.map((item, j) => {
                                        return (
                                            <Fade in timeout={(j+1)*1500}>
                                                <Grid item xs={5}>
                                                    <Card style={{height: 400}}>
                                                        <CardActionArea style={{height: 350}}>
                                                            <CardMedia
                                                                style={{height: 180, width: 'auto'}}
                                                                image={item.img}
                                                                title={item.title}
                                                            />
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="h2">
                                                                    {item.title}
                                                                </Typography>
                                                                <Typography component="p">
                                                                    {item.description}
                                                                </Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                        <CardActions>
                                                            <Button size="small" color="primary">
                                                                Source Code
                                                            </Button>
                                                            <Button size="small" color="primary">
                                                                Learn More
                                                            </Button>
                                                        </CardActions>
                                                    </Card>
                                                </Grid>
                                            </Fade>
                                        )
                                    })}
                                </Grid>
                            </Fade>
                        )
                    })}
                </Grid>
                <Footer/>
            </Grid>
        );
    };
}

export default withRouter(Projects);