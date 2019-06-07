import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from '/Users/andreacortoni/Projects/Portfolio/portfolio/src/routes/AuxComponents/Navigation.js';
import { withRouter } from 'react-router-dom';
import Footer from '/Users/andreacortoni/Projects/Portfolio/portfolio/src/routes/AuxComponents/Footer.js';
import ScrollAnimation from 'react-animate-on-scroll';


const commands = {
    'Cursor Movement': [
        'h (left)',
        'j (down)',
        'k (up)',
        'l (right)'],
    'Cursor Movement by word': [
        'w (next word)',
        'b (back word)',
        'e (ned of word)'],
    'Other cursor movement': [
        '$ move to the end of the line',
        '0 move to the start of the line',
        '% (match brackets) move to matching bracket when cursor is over () {} []'],
    'Modify Text': [
        'x (delete) delete a character and move to the position right to it',
        'X (delete backwards) delete a character and move to the position left to it',
        'D (delete line) delete from the current position to the end of the line',
        'J (joinline) joins the current line with the next line, that is, move the line below to the current line'
    ],
    'Exit viw mode': [
        'i (insert) exits viw mode',
        'a (append) cursor moves one to the right and exits viw mode immediately (allows editing after the current character)',
        'o (open) enter a newline under the current line and exit viw mode',
        's (substitute) delete character under cursor and exit viw mode',
        'G (go) go to the final line in the text',
        'I (insert in line) go to the first character of the line and exit viw mode',
        'A (insert after line) go to the last character of the line and exit viw mode',
        'C (change line) delete from the current position to the end of the line and exit viw mode',
        '. (repeat text changing command) repeat the last text modifying command'
    ],
    'Advanced Modify text': [
        'd (delete) + movement d while moving deletes everything that was moved over. Does not exit viw mode, see c for more information.',
        'd (delete) + d deletes the entire line'
    ],
    'Advanced exit viw mode': [
        'c (change) + movement c while moving deletes everything that was moved over, e.g., c + l deletes the character ' +
        'to the right. - c + j deletes everything right of the cursor up to the character straight down. (This does not ' +
        'follow vi(m) behavior to make it easier on you.) The same applies for all other movement (including more complicated ' +
        'ones such as match bracket), it exits viw mode.',
        'c (change) + c deletes the entire line and exits viw mode.'
    ],
    'Indentation': [
        '< or > (indent or dedent) + movement indents the code by two spaces. > + j will indent two lines, > + l or h ' +
        'has the same behavior and indents the entire line. Indents work strictly with lines, not with regions of lines.',
        '< + < or > + > same but on the entire line'
    ],
    'Pasting': [
        'p (paste) paste whatever was deleted previously using a command after the current cursor position, e.g., ' +
        'deleting something with x and using p will paste the deleted character. Deleting with D and pasting with p will paste the entirely deleted sequence.',
        'P (paste behind) exactly the same as p but pasting behind the current position'
    ],
    'Yanking': [
        'y (yank) + movement yanks text into the copybuffer, this has the same behavior as d or c and requires movement ' +
        'to define what should be yanked. This changes the behavior of p into “paste whatever was deleted previously OR what was yanked”.'
    ],
    'Count': [
        '1-9+... Allmovementscanbeprefixedwithanumbertoindicatehowmanytimesthemove- ment should be executed. ' +
        'This also combines with actions that work with movements, e.g., d3w deletes the three following words.'
    ],
    'Visual': [
        'v (visual) All movements that are being done are shown in the editor through selecting text. For example, vj ' +
        'would select the contents that would be deleted through dj.',
        'V (visual line) All movements select text, except this only selects complete lines. Pressing V once selects the current line.'
    ],
    'Find': [
        'f (find) + key a movement that jumps to the first word in the line that starts with ‘key\''
    ]
};

class AtomVim extends React.Component{

    render() {
        return (
            <Grid container justify={'center'}>
                <Grid container justify={'center'} style={{marginLeft: 200, marginRight: 200}}>
                    <Navigation/>
                    <Grid container justify={'center'} style={{marginTop: 80}}>
                        <Grid item xs={12}>
                            <h1 style={{color: '#4885ed', textAlign: 'center'}}>
                                Viw
                            </h1>
                        </Grid>
                    </Grid>
                    <ScrollAnimation animateIn={'fadeIn'} animateOnce>
                        <Grid container justify={'center'} style={{marginTop: 30}}>
                            <Grid item xs={12}>
                                <h1 style={{color: '#4885ed'}}>
                                    Problem Definition
                                </h1>
                            </Grid>
                        </Grid>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={'fadeIn'} animateOnce>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    This work aims building an extension for the popular text editor Atom to enable Vim
                                    like editing. This software was developed in Scala and converted to javascript in order
                                    to be used with Atom.
                                    This project was conducted during the course of Comparative Programming Languages @ KULeuven, Belgium.
                                    It was an interesting experiment in terms of testing and learning a new language like Scala able to encapsule both
                                    OOP and Functional Programming.
                                </p>
                            </Grid>
                        </Grid>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={'flipInX'} animateOnce>
                        <Grid container justify={'center'} style={{marginTop: 30}}>
                            <Grid item xs={12}>
                                <h1 style={{color: '#4885ed'}}>
                                    Functionality
                                </h1>
                            </Grid>
                        </Grid>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={'fadeIn'} animateOnce>
                        <Grid container justify={'center'}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    The current version of the plugin allows for the following commands:
                                    <ul>
                                        {Object.keys(commands).map((cmd, i) => {
                                            return (
                                                <li>
                                                    <h5 style={{paddingTop: 15}}>{cmd}</h5>
                                                    <ul>
                                                        {commands[cmd].map((item, j) => {
                                                            return (
                                                                <li>{item}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </p>
                            </Grid>
                        </Grid>
                    </ScrollAnimation>
                </Grid>
                <Footer/>
            </Grid>
        );
    };
}

export default withRouter(AtomVim);
