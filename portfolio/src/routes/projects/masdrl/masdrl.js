import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from '/Users/andreacortoni/Projects/Portfolio/portfolio/src/routes/AuxComponents/Navigation.js';
import { withRouter } from 'react-router-dom';
import Footer from '/Users/andreacortoni/Projects/Portfolio/portfolio/src/routes/AuxComponents/Footer.js';
import Fade from '@material-ui/core/Fade';
import STATE from './state.png';
import RR from './RR.png';
import REWARDS from './rewards.png';

 const rewards = [
     {
         name: "Global Capture Reward (GCR)",
         info: "Difference between numbers of components of each team at time step t.",
         image: ""
     },
     {
         name: "Local Capture Reward (LCR)",
         info: "Reward based on current agent having captured an opponent at time step t.",
         image: ""
     },
     {
         name: "Reachability Reward (RR)",
         info: "Reward representing how much of the environment is in control of each of the two teams. Reachability is defined as distance from agent to cell",
         image: RR
     }
 ];



class MAS extends React.Component{

    render() {
        return (
            <Grid container justify={'center'}>
                <Grid container justify={'center'} style={{marginLeft: 200, marginRight: 200}}>
                    <Navigation/>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 80}}>
                            <Grid item xs={12}>
                                <h1 style={{color: '#4885ed', textAlign: 'center'}}>
                                    Deep Reinforcement Learning for Multi Agent Systems
                                </h1>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 30}}>
                            <Grid item xs={12}>
                                <h1 style={{color: '#4885ed'}}>
                                    Problem Definition
                                </h1>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    Reinforcement Learning defines itself as a branch of machine learning trying to exploit the science of decision making.
                                    The problem of decision making becomes particularly complex in the case of multi-agent systems (MAS) and the increase in number of available agents in an environment.
                                    In this work we attempt of solving the approach to such dimensionality issue by applying deep reinforcement learning (DRL) which uses a function approximator to estimate Q-Values for the set of allowed actions.
                                </p>
                                <p style={{textAlign: 'justify'}}>
                                    The problem taken under examination is a Pursuit-Evasion problem.
                                    Two separate teams are defined. One team, the evaders, is trying to escape from the other team, the pursuers, trying to catch the evaders.
                                    The agents in the problem are heterogeneous. In this exercise we focus on trying to apply the MADRL to learn pursuit policies. The evaders are set to follow a simple heuristic policy which takes them further away from the closest pursuer. Simplifications are applied to the problem buy utilizing a matrix like state representation and by using discrete time and space.
                                    The experiment is run on a 10x10 environment board with two teams of 5 elements each.
                                </p>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 30}}>
                            <Grid item xs={12}>
                                <h1 style={{color: '#4885ed'}}>
                                    Approach
                                </h1>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    As stated above the problem was simplified with a GridWorld-like interpretation. Such choice
                                    gave the opportunity of exploiting models Convolutional Neural Networks for such problem.
                                </p>
                                <p style={{textAlign: 'justify'}}>
                                    The environment representation is described by the following figure also representing the model's input tensor:
                                </p>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item>
                                <img
                                    src={STATE}
                                    alt={'state_pic'}
                                    height={300}
                                    width={'auto'}
                                    style={{borderRadius: '3%'}}
                                />
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    A key element of a reinforcement learning algorithm is the reward signal generated by the environment for the agents.
                                    Such function must be carefully studied and design in order to exploit as much information as possible for the interaction agents-environment
                                    For this problem three different components of the function were defined:
                                </p>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            {rewards.map((reward, i) => {
                                return (
                                    <Grid item xs={4}>
                                        <h3 style={{textAlign: 'center'}}>
                                            {reward.name}
                                        </h3>
                                        <p style={{textAlign: 'center'}}>
                                            {reward.info}
                                            {reward.image !== "" ? (
                                                <img
                                                    src={reward.image}
                                                    alt={'state_pic'}
                                                    height={100}
                                                    width={'auto'}
                                                    style={{
                                                        marginTop: 10,
                                                        borderRadius: '3%'
                                                    }}
                                                />
                                            ) : (<div></div>)
                                            }
                                        </p>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    Rewards are scaled to a range r ∈ [0, number of agents].
                                    An interpolation between these weights is defined by the following formulas:
                                </p>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item>
                                <img
                                    src={REWARDS}
                                    alt={'rewards_pic'}
                                    height={50}
                                    width={'auto'}
                                    style={{
                                        marginTop: 10,
                                        borderRadius: '3%'
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    Given the above specification several training rounds and experiments were run in order to evaluate
                                    the chosen approach.
                                </p>
                            </Grid>
                        </Grid>
                    </Fade>
                </Grid>
                <Footer/>
            </Grid>
        );
    };
}

export default withRouter(MAS);