import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MASDRL from './masdrl.png';
import Chip from '@material-ui/core/Chip';
import scrollToComponent from 'react-scroll-to-component';

const work = {
    mas: {
        title: "Deep Reinforcement Learning for Multi Agent Systems",
        description: "A deep reinforcement learning framework applied to Pursuer/Evader world. The policy to be learned " +
            "aims on taking a team of agents to the victory by catching a team of evaders.",
        code: "",
        more: ""
    },

    dots: {
        title: "Deep Reinforcement Learning for Games",
        description: "Self play DQN algorithm aimed on learning how to play the game Dots and Boxes",
        code: "",
        more: ""
    },

    viw: {
        title: "Viw",
        description: "Vi(m) plugin for Atom",
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
            work_name: props.name
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container justify={'center'} style={{marginTop: 20}}>
                <Grid item xs={5}>
                    <img
                        src={MASDRL}
                        alt={'work'}
                        height={300}
                        width={400}
                        style={{
                            borderRadius: '1%',
                            opacity: 0.8,
                            marginLeft: 70
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Grid container style={{marginTop: 60}}>
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
                                style={{backgroundColor: '#4885ed', color: 'white'}}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <Chip
                                label="More"
                                clickable
                                style={{backgroundColor: '#4885ed', color: 'white'}}
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

export default withStyles(styles)(WorkItem);