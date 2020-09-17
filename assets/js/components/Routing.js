import React, {Fragment} from 'react';
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Accueil from "./Pages/Accueil/Accueil";
import Apropos from "./Pages/Apropos/Apropos";
import NavBar from "./NavBar/NavBar";


export const HomeRoute = "/";
export const Propos = "/a-propos/";

class Routing extends React.Component {
    render() {
        return (
                <Fragment>
                <NavBar/>
                <Route path={HomeRoute} exact component={Accueil} />
                <Route path={Propos} component={Apropos} />
                </Fragment>

        );
    }
}
export default withRouter(Routing);