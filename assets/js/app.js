import React from 'react';
import ReactDOM from 'react-dom';
/*import NavBar from "./components/NavBar/NavBar";*/
import DefaultThemeProvider from "./components/themes/DefaultThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import '../css/app.css';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import NavBar from "./components/NavBar/NavBar";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <NavBar/>
                </Grid>

            </Grid>
        </div>


    );
};

ReactDOM.render(
    <DefaultThemeProvider>
        <CssBaseline/>
        <App/>
    </DefaultThemeProvider>, document.getElementById('root'));

