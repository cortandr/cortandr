import React from 'react';
import Grid from '@material-ui/core/Grid';
import Home from './routes/Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Resume from './routes/Resume';
import Projects from './routes/Projects';
import About from './routes/About';
import MAS from './routes/projects/masdrl/masdrl';
import DOTSBOXES from './routes/projects/dots/dots';

function App() {
    return (
        <Grid container justify={'center'}>
            <Router basename={'portfolio'}>
                <Route exact path="/" component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/masdrl" component={MAS} />
                <Route path="/dots" component={DOTSBOXES} />
            </Router>
        </Grid>
    );
}

export default App;

