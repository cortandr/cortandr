import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from './Navigation';
import Image from 'react-bootstrap/Image';
import Pic from './AC_PHOTO.jpg';

class Home extends React.Component{
    render() {
        return (
            <Grid container justify={'center'}>
                <Navigation/>
                <Grid
                    container
                    justify={'center'}
                    spacing={32}
                    style={{
                        backgroundColor: '#F8F8F8',
                        minHeight: '100vh',
                        verticalAlign: 'middle',
                    }}>
                    <Grid item xs={5}>
                        <Grid container alignItems={'vertical'} style={{marginTop: 260}}>
                            <Grid item style={{height: 70}}>
                                <h1 style={{
                                    color: '#4885ed',
                                    fontSize: 40
                                }}>
                                    Ciao, I'm Andrea.</h1>
                            </Grid>
                            <Grid item>
                                <p style={{
                                    fontSize: 25,

                                }}>
                                    I'm a Software Engineer with a strong passion for Machine Learning and its incredible potential.
                                </p>
                                <p style={{
                                    fontSize: 20,
                                }}>
                                    Former Software Engineering Intern at
                                    <span style={{fontSize: 20, color: '#cc0000'}}> TESLA </span>,
                                    <span style={{fontSize: 20, color: '#006699'}}> IBM</span>,
                                    embedded software developer at
                                    <span style={{fontSize: 20, color: '#8FD1F7'}}> ISMB</span>.
                                </p>
                            </Grid>
                        </Grid>
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
            </Grid>
        );
    };
}

export default Home;