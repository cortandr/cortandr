import Carousel from 'react-bootstrap/Carousel';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import './recommendations.css';
import Fade from "@material-ui/core/Fade";
import ScrollAnimation from 'react-animate-on-scroll';
import Rec from './Recommendation letter for Andrea.pdf';



const recs = [
    {
        "person": "Michael Galkovsky",
        "description": "Chief Software Architect, IBM",
        "rec": "He is a bright and transparent developer with great analytical skills" +
            "...he showed great organizational skills in his work, namely when it came to software design. " +
            "He clearly showed passion for software development and especially for the integration of cognitive tools and " +
            "machine learning techniques. ",
        "full_version": <p style={{color: 'black'}}>Chief Software Architect, IBM - <span><a href={"https://www.linkedin.com/in/andrea-cortoni-8a9b74116/"}>full version</a></span></p>
    },
    {
        "person": "Xiaoliang (Wendy) Gong ",
        "description": "Ph.D, Tongji University, Shanghai, China",
        "rec": "Andrea Cortoni has proven to me his outstanding aptitude to approach any kind of scenario as well his great capability of solving problems..." +
            "Andrea really impressed me with his knowledge, skill and dedication to his work.",
        "full_version": <p style={{color: 'black'}}>CPh.D, Tongji University, Shanghai, China - <span><a href={Rec} rel="noopener noreferrer" target="_blank">full version</a></span></p>

    },
];


class Recommendations extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isHide: false,
        };
    }


    render() {

        return (
            <Grid container justify={'center'} style={{marginTop: 10, backgroundColor: 'white'}}>
                <Fade in timeout={1000}>
                    <Grid container justify={'center'} style={{marginTop: 20, marginBottom: 30}}>
                        <Grid item xs={12}>
                            <ScrollAnimation animateIn={'flipInX'}>
                                <h1 style={{color: '#4885ed', textAlign: 'center'}}>What people say about me</h1>
                            </ScrollAnimation>
                        </Grid>
                    </Grid>
                </Fade>
                <Grid container justify={'center'} style={{marginRight: 100, marginLeft: 100}}>
                    <Grid item xs={8}>
                        <ScrollAnimation animateIn={'bounceInUp'}>
                            <Carousel style={{height: 300, marginTop: 30}}
                                      prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                            >
                                {recs.map((r, i) => {
                                    return (
                                        <Carousel.Item key={i} style={{height: 280}}>
                                            <Grid container justify={'center'}>
                                                <Grid item xs={8}>
                                                    <p className={'snap'}>"{r.rec}"</p>
                                                </Grid>
                                            </Grid>
                                            <Carousel.Caption style={{marginTop: 70}}>
                                                <Grid container justify={'center'}>
                                                    <Grid item xs={8}>
                                                        <h5 style={{color: '#4885ed'}}>{r.person}</h5>
                                                        {r.full_version}
                                                    </Grid>
                                                </Grid>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )
                                })}
                            </Carousel>
                        </ScrollAnimation>
                    </Grid>
                </Grid>
            </Grid>
        )
    };
}

export default Recommendations;

