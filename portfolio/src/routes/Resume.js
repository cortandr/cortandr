import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from './AuxComponents/Navigation';
import { withRouter, Link } from 'react-router-dom';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import './fonts.css';
import Chip from "@material-ui/core/Chip";
import Footer from './AuxComponents/Footer';
import Button from '@material-ui/core/Button/index';

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

const experience = [
    {
        date: "Sept '18 - March '19",
        title:  "TESLA - Software Engineering Intern",
        skills: ["Python", "React", "Django", "Keras", "SciKit-Learn", "MongoDB"],
        description:
            "Swat Team intern in Remanufacturing Department. Mainly developed systems for anomaly detection. " +
            "Worked on multiple projects involving the application of technologies including " +
            "Convolutional Neural Networks, " +
            "Automated Machine Learning, " +
            "Full stack development, " +
            "Data analysis."
    },
    {
        date: "July '18 - Sept '18",
        title:  "IBM - Software Engineering Intern",
        skills: ["Python", "React", "Flask", "NLTK", "SciKit-Learn", "MongoDB"],
        description:
            "Worked on bringing automation in talent acquisition processes. " +
            "Applied data science techniques as well as built RESTful APIs to automate different processes in human resources."
    },
    {
        date: "March '17 - June '17",
        title:  "ISMB - Embedded Software Developer Intern",
        skills: ["C", "C++", "UWB"],
        description:
            "Worked in a team developing technologies for IoT. " +
            "Extended the firmware of a rover system for supporting the use of UWB module " +
            "for indoor localization, instead of GPS module."
    }
];

const education = [
    {
        date: "2017-2019",
        title:  "Master of Science in Computer Science, Specialization in AI",
        description:
            "KU Leuven, Leuven, Belgium."
    },
    {
        date: "2014-2017",
        title:  "Bachelor of Science in Electronic Engineering",
        description:
            "Polytechnic of Turin, Turin, Italy."
    },
    {
        date: "2015-2016",
        title:  "Bachelor of Science in Information Technology Engineering",
        description:
            "Tongji University, Shanghai, China."
    }
];

class Resume extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Grid container justify={'center'}
                  // style={{overflowX: 'hidden'}}
            >
                <Navigation/>
                <Grid container justify={'center'} style={{marginTop: 80}}>
                    <Grid item xs={12}>
                        <h1 style={{color: '#4885ed', textAlign: 'center'}}>Experience</h1>
                    </Grid>
                </Grid>
                {experience.map((item, i) => {
                    return (
                        <Grid container justify={'center'}>
                            <Grid item xs={6}>
                                <p style={{
                                    textAlign: 'right',
                                    marginTop: 60,
                                    marginRight: 16
                                }}>{item.date}</p>
                            </Grid>
                            <Grid item xs={6}>
                                <h3 style={{color: '#4885ed'}}>{item.title}</h3>
                                <p style={{width: 500, textAlign: 'justify'}}>{item.description}</p>
                                <p>
                                    {item.skills.map((s, i) => {
                                        return (
                                            <Chip
                                                label={s}
                                                clickable
                                                style={{
                                                    marginRight: 5,
                                                    height: 25,
                                                    borderColor: '#4885ed',
                                                    color: '#4885ed'
                                                }}
                                                variant="outlined"
                                            />
                                        )
                                    })}
                                </p>
                            </Grid>
                        </Grid>
                    )
                })}
                <Grid container justify={'center'} style={{marginTop: 50}}>
                    <Grid item xs={12}>
                        <h1 style={{color: '#4885ed', textAlign: 'center'}}>Education</h1>
                    </Grid>
                </Grid>
                {education.map((item, i) => {
                    return (
                        <Grid container justify={'center'}>
                            <Grid item xs={6}>
                                <p style={{
                                    textAlign: 'right',
                                    marginTop: 40,
                                    marginRight: 16
                                }}>{item.date}</p>
                            </Grid>
                            <Grid item xs={6}>
                                <h3 style={{color: '#4885ed'}}>{item.title}</h3>
                                <p style={{width: 500, textAlign: 'justify'}}>{item.description}</p>
                            </Grid>
                        </Grid>
                    )
                })}
                <Grid container justify={'center'} style={{marginTop: 50, textAlign: 'center'}}>
                    <Grid item xs={3}>
                        <Button style={{
                            color: "white",
                            backgroundColor: '#4885ed',
                            textAlign: 'center'
                        }}>
                            Download PDF Version
                        </Button>
                    </Grid>
                </Grid>
                <Footer/>
            </Grid>
        );
    };
}

export default withRouter(Resume);