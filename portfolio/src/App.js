import React from 'react';
import Grid from '@material-ui/core/Grid';
import Home from './routes/Home';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

function App() {
    return (
        <Grid container justify={'center'}>
            <Router>
                <Route path="/" component={Home} />
            </Router>
        </Grid>
    );
}

export default App;

