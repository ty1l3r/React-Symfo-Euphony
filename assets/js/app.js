import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./components/NavBar/NavBar";
import DefaultThemeProvider from "./components/themes/DefaultThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";


export default function App() {


    return (
        <NavBar/>
    );
};

ReactDOM.render(
    <DefaultThemeProvider>
    <CssBaseline/>
    <App/>
    </DefaultThemeProvider>

    , document.getElementById('root'));

