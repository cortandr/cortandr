import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from '/Users/andreacortoni/Projects/Portfolio/portfolio/src/routes/AuxComponents/Navigation.js';
import { withRouter } from 'react-router-dom';
import Footer from '/Users/andreacortoni/Projects/Portfolio/portfolio/src/routes/AuxComponents/Footer.js';
import ScrollAnimation from 'react-animate-on-scroll';
import Dist from './distribution.png';


class ImageAI extends React.Component{

    render() {
        return (
            <Grid container justify={'center'}>
                <Grid container justify={'center'} style={{marginLeft: 200, marginRight: 200}}>
                    <Navigation/>
                        <Grid container justify={'center'} style={{marginTop: 80}}>
                            <Grid item xs={12}>
                                <h1 style={{color: '#4885ed', textAlign: 'center'}}>
                                    Image AI
                                </h1>
                            </Grid>
                        </Grid>
                    <ScrollAnimation animateIn={'flipInX'} animateOnce>
                        <Grid container justify={'center'} style={{marginTop: 30}}>
                            <Grid item xs={12}>
                                <h1 style={{color: '#4885ed'}}>
                                    Problem Definition
                                </h1>
                            </Grid>
                        </Grid>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={'zoomIn'} animateOnce>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    This work aims on testing advances in image understanding tasks with deep learning techniques.
                                    Four experiments are carried out: classification, segmentation, detection and noise removal.
                                </p>
                                <p style={{textAlign: 'justify'}}>
                                    The dataset used for such purposes is taken from the PASCAL VOC challenge 2009.
                                    See more here: <span><a href='#'>PASCALVOC2009</a></span>
                                </p>
                            </Grid>
                        </Grid>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={'zoomIn'} animateOnce>
                        <Grid container justify={'center'}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>

                                </p>
                                <p style={{textAlign: 'justify'}}>

                                </p>
                            </Grid>
                        </Grid>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={'zoomIn'} animateOnce>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    The used dataset provides images containing objects belonging to 20 different classes.
                                    Plotted below is the distribution of class presences in the provided training images.
                                </p>
                                <img
                                    src={Dist}
                                    style={{height: 'auto', width: '500', margin: 10}}
                                    alt={'distribution'}
                                />
                            </Grid>
                        </Grid>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={'flipInX'} animateOnce>
                        <Grid container justify={'center'} style={{marginTop: 30}}>
                            <Grid item xs={12}>
                                <h1 style={{color: '#4885ed'}}>
                                    Classification
                                </h1>
                            </Grid>
                        </Grid>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={'zoomIn'} animateOnce>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    Given the nature of the dataset, objects belonging to multiple classes can appear in the same image.
                                    The output of the model used in this work will have dimensions related to the number of classes present
                                    in the dataset. Given that the input images are given in multiple dimension, padding and resizing are
                                    necessary to transform all images to same dims.
                                    Convolutional Network are used for this task. Multiple architecture are available from state of the art.
                                    This work reproduced a network based on the use of residual units in order to perform classification.
                                </p>
                            </Grid>
                        </Grid>
                    </ScrollAnimation>
                    <Grid container justify={'center'} style={{marginTop: 30}}>
                        <Grid item xs={12}>
                            <ScrollAnimation animateIn={'flipInX'} animateOnce>
                                <h1 style={{color: '#4885ed', textAlign: 'center'}}>
                                    Noise Removal
                                </h1>
                            </ScrollAnimation>
                        </Grid>
                    </Grid>
                    <ScrollAnimation animateIn={'zoomIn'} animateOnce>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    For this task an AutoEncoder has been used to remove noise from images.
                                    This architecture is again based on state of the art techniques involving a hourglass architecture
                                    with skip connection. Same image processing as in the classification task have been applied.
                                    Noise has been added to the original images by use of a random gaussian distribution.
                                </p>
                            </Grid>
                        </Grid>
                    </ScrollAnimation>
                    <Grid container justify={'center'} style={{marginTop: 30}}>
                        <Grid item xs={12}>
                            <h1 style={{color: '#4885ed'}}>
                                TO-DO
                            </h1>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <ul>
                                <li>
                                    Object Detection
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                <Footer/>
            </Grid>
        );
    };
}

export default withRouter(ImageAI);
