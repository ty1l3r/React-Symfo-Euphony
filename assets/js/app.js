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
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Container from "@material-ui/core/Container";
/*import Acceuil from 'components/Pages/Accueil';*/
import Accueil from "./components/Pages/Accueil/Accueil";
import Apropos from "./components/Pages/Apropos/Apropos";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    marginTop: {
      marginTop: '8%'
    }
}));

export default function App() {
    const classes = useStyles();
    return (

        <Container className={classes.root}>
            <NavBar/>

            <Grid className={classes.marginTop} item xs={12}>
                <Router>
                    <Route exact path="/a-propos" component={Apropos}/>
                    <Route exact path="/" component={Accueil}/>
                </Router>
            </Grid>

        </Container>

    );
};

ReactDOM.render(
    <DefaultThemeProvider>
        <CssBaseline/>
        <App/>
    </DefaultThemeProvider>, document.getElementById('root'));

