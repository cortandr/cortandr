import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from './Navigation';
import Pic from './AC_PHOTO.jpg';
import WorkItem from './WorkItem';
import scrollToComponent from 'react-scroll-to-component';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import './fonts.css';

const SocialButtonsPage = () => {
    return (
        <MDBContainer>
            <MDBBtn tag="a" floating social="tw">
                <MDBIcon fab icon="twitter" />
            </MDBBtn>
            <MDBBtn tag="a" floating social="li">
                <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
            <MDBBtn tag="a" floating social="git">
                <MDBIcon fab icon="github" />
            </MDBBtn>
        </MDBContainer>
    );
};

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
                                <h1 style={{
                                    color: '#4885ed',
                                    fontSize: 40,
                                }}>
                                    Ciao, I'm Andrea.</h1>
                            </Grid>
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
                        </Grid>
                        <SocialButtonsPage/>
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
            </Grid>
        );
    };
}

export default Home;