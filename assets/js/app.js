import React from 'react';
import ReactDOM from 'react-dom';
/*import NavBar from "./components/NavBar/NavBar";*/
import DefaultThemeProvider from "./components/themes/DefaultThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import '../css/app.css';
import {makeStyles} from "@material-ui/styles";
import {BrowserRouter as Router} from 'react-router-dom';
/*import Acceuil from 'components/Pages/Accueil';*/
import '../css/boostrap.min.css';
import Routing from "./components/Routing";


const useStyles = makeStyles(theme => ({
    divider: theme.mixins.toolbar,
}))

export const HomeRoute = "/";
export const Propos = '/a-propos'

export default function App() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.divider}/>
            <Router><Routing/></Router>
        </div>

    );
};

ReactDOM.render(
    <DefaultThemeProvider>
        <CssBaseline/>
        <App/>
    </DefaultThemeProvider>, document.getElementById('root'));

