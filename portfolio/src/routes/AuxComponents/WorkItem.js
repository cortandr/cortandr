import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles/index';
import Grid from '@material-ui/core/Grid/index';
import MASDRL from '../local_images/masdrl.png';
import DOTS from '../local_images/dots.png';
import Chip from '@material-ui/core/Chip/index';
import Fade from '@material-ui/core/Fade';
import IntersectionVisible    from 'react-intersection-visible';
import Divider from '@material-ui/core/Divider';
// require('intersection-observer');


const work = {
    mas: {
        title: "Deep Reinforcement Learning for Multi Agent Systems",
        description: "A deep reinforcement learning framework applied to Pursuer/Evader world. The policy to be learned " +
            "aims on taking a team of agents to the victory by catching a team of evaders.",
        code: "https://github.com/cortandr/MASRL",
        img: MASDRL,
        more: ""
    },

    dots: {
        title: "Deep Reinforcement Learning for Games",
        description: "Self play DQN algorithm aimed on learning how to play the game Dots and Boxes",
        code: "",
        img: DOTS,
        more: ""
    },

    viw: {
        title: "Viw",
        description: "Vi(m) plugin for Atom",
        code: "",
        more: ""
    },

    MovieRec: {
        title: "Movies Recommendation System",
        description: "An application built to recommend movies upon user input",
        code: "",
        more: ""
    },

    SpeedPred: {
        title: "Speed Prediction",
        description: "Machine Leaning algorithm to predict vehicle speed from dash-cam video",
        code: "",
        more: ""
    },
};

const styles = {
    card: {
        minWidth: 275,
        shadows: 'none'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        fontDisplay: 'bold'
    },
    pos: {
        marginBottom: 12,
    },
};

class WorkItem extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            visible: true,
            work_name: props.name
        };

    }

    render() {
        return (
            <Grid id={'item'} container justify={'center'} style={{marginTop: 30, marginBottom: 30}}>
                <Grid item xs={5}>
                    <img
                        src={work[this.state.work_name].img}
                        // src={MASDRL}
                        alt={'work'}
                        height={'auto'}
                        width={'400'}
                        style={{
                            borderRadius: '1%',
                            opacity: 0.8,
                            marginLeft: 70
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Grid container style={{marginTop: 10}}>
                        <Grid item>
                            <h3 style={{color: '#4885ed'}}>{work[this.state.work_name].title}</h3>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <p>{work[this.state.work_name].description}</p>
                        </Grid>
                    </Grid>
                    <Grid container justify={'flex-start'} spacing={8}>
                        <Grid item>
                            <Chip
                                label="Source Code"
                                clickable
                                style={{
                                    backgroundColor: '#4885ed',
                                    borderColor: '#4885ed',
                                    color: 'white'}}
                                variant="outlined"
                                onClick={() => window.location.href=work[this.state.work_name].code}
                            />
                        </Grid>
                        <Grid item>
                            <Chip
                                label="More"
                                clickable
                                style={{
                                    backgroundColor: '#4885ed',
                                    borderColor: '#4885ed',
                                    color: 'white'}}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    };
}

WorkItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(WorkItem));