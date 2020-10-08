import {createMuiTheme} from '@material-ui/core/styles';
import React from "react";
import {MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#4444',
        },
        secondary: {
            main: '#3ee9ff',
        },

        info: {
            light: '#fff',
            main: '#fff',
            dark: '#fff'
        },
        text: {
            primary: '#fff',
            secondary: '#fff'
        }

    },
    typography: {
        fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif" '
    },
    action: {
        focus: '#3ee9ff'
    }
});

const DefaultThemeProvider = (props) => {
    return (
        <MuiThemeProvider theme={theme}>
            {props.children}
        </MuiThemeProvider>
    );
};
export default DefaultThemeProvider;