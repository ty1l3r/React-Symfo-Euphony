import React from 'react';
import {HashRouter, Route, withRouter} from "react-router-dom";
import Accueil from "./Pages/Accueil/Accueil";
import Apropos from "./Pages/Apropos/Apropos";
import NavBar from "./NavBar/NavBar";


export const HomeRoute = "/";
export const Propos = "/a-propos/";

class Routing extends React.Component {
    render() {
        return (
            <HashRouter>
                <NavBar/>
                <main>
                    <Route path={HomeRoute} exact component={Accueil}/>
                    <Route path={Propos} component={Apropos}/>
                </main>
            </HashRouter>


        );
    }
}
export default withRouter(Routing);