import React from 'react';
import Grid from '@material-ui/core/Grid';
import Home from './routes/Home';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Resume from './routes/Resume';
import Projects from './routes/Projects';

function App() {
    return (
        <Grid container justify={'center'}>
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
            </Router>
        </Grid>
    );
}

export default App;

