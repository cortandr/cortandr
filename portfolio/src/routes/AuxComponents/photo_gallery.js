import Grid from '@material-ui/core/Grid';
import React from 'react';
import './recommendations.css';
import Fade from "@material-ui/core/Fade";
import pic1 from './images/IMG_4946.JPG';
import pic2 from './images/IMG_1104.JPG';
import pic3 from './images/IMG_1177.JPG';
import pic4 from './images/IMG_4425.JPG';
import pic5 from './images/IMG_4433.JPG';
import pic6 from './images/IMG_4585.JPG';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
});


const photos = [
    {
        img: pic1,
        // title: 'Image',
        // author: 'author',
        cols: 2,
    },
    {
        img: pic2,
        // title: 'Image',
        // author: 'author',
        cols: 2,
    },
    {
        img: pic3,
        // title: 'Image',
        // author: 'author',
        cols: 2,
    },
    {
        img: pic4,
        // title: 'Image',
        // author: 'author',
        cols: 2,
    },
    {
        img: pic5,
        // title: 'Image',
        // author: 'author',
        cols: 2,
    },
];


class Photos extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isHide: false,
        };
    }


    render() {
        const classes = this.props.classes;

        return (
            <Grid container justify={'center'} style={{marginTop: 100, backgroundColor: '#f9fbfd'}}>
                <Fade in timeout={1000}>
                    <Grid container justify={'center'} style={{marginTop: 20, marginBottom: 30}}>
                        <Grid item xs={12}>
                            <h1 style={{color: '#4885ed', textAlign: 'center'}}>Photography</h1>
                        </Grid>
                    </Grid>
                </Fade>
                <Grid container justify={'center'} style={{marginRight: 100, marginLeft: 100}}>
                    <Grid item xs={8}>
                        <div className={classes.root}>
                            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                                {photos.map((tile, i) => (
                                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                                        <img src={tile.img} alt={'pic'} />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        )
    };
}

export default withStyles(Photos);

