import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from './AuxComponents/Navigation';
import { withRouter, Link } from 'react-router-dom';
import './fonts.css';
import Chip from "@material-ui/core/Chip";
import Footer from './AuxComponents/Footer';
import Button from '@material-ui/core/Button/index';
import Fade from '@material-ui/core/Fade';
import CV from './files/AndreaCortoniCV.pdf';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import EducationIcon from '@material-ui/icons/School';
import './resume.css';

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
        date: "2015-2016",
        title:  "Bachelor of Science in Information Technology Engineering",
        description:
            "Tongji University, Shanghai, China."
    },
    {
        date: "2014-2017",
        title:  "Bachelor of Science in Electronic Engineering",
        description:
            "Polytechnic of Turin, Turin, Italy."
    },
];

class Resume extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Grid container justify={'center'} style={{backgroundColor: '#f9fbfd'}}>
                <Navigation/>
                <Fade in timeout={1000}>
                    <Grid container justify={'center'} style={{marginTop: 80, marginBottom: 50}}>
                        <Grid item xs={12}>
                            <h1 style={{color: '#4885ed', textAlign: 'center'}}>Experience</h1>
                        </Grid>
                    </Grid>
                </Fade>
                <VerticalTimeline>
                    {experience.map((item, i) => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work content-type-work"
                                date={item.date}
                                iconStyle={{ background: '#4885ed', color: '#fff' }}
                                icon={<WorkIcon />}
                            >
                                <h4 className="vertical-timeline-element-title">{item.title}</h4>
                                {item.skills.map((s, j) => {
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
                                <p style={{fontSize: 12}}>
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>
                <Fade in timeout={1000}>
                    <Grid container justify={'center'} style={{marginTop: 80, marginBottom: 50}}>
                        <Grid item xs={12}>
                            <h1 style={{color: '#4885ed', textAlign: 'center'}}>Education</h1>
                        </Grid>
                    </Grid>
                </Fade>
                <VerticalTimeline>
                    {education.map((item, i) => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education, content-type-edu"
                                date={item.date}
                                iconStyle={{ background: '#4885ed', color: '#fff' }}
                                icon={<EducationIcon />}
                            >
                                <h4 className="vertical-timeline-element-title">{item.title}</h4>
                                <p style={{fontSize: 12}}>
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>
                <Grid container justify={'center'} style={{marginTop: 50, textAlign: 'center'}}>
                    <Grid item xs={3}>
                        <Button style={{
                            color: "white",
                            backgroundColor: '#4885ed',
                            textAlign: 'center'
                        }}>
                            <a href={CV} rel="noopener noreferrer" target="_blank" style={{color: "white", textDecoration: "none"}}>Download PDF Version</a>
                        </Button>
                    </Grid>
                </Grid>
                <Footer/>
            </Grid>
        );
    };
}

export default withRouter(Resume);
