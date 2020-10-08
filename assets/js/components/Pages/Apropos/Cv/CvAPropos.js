import React, {Fragment} from 'react';
import Avatar from "@material-ui/core/Avatar";
import Logo from "../../../../images/fcpic.jpg";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import RoomIcon from '@material-ui/icons/Room';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

/*Style Logo*/
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        marginLeft: "auto",
        marginRight: "auto"
    },
}));

function CvAPropos() {

    const classes = useStyles();

    return (
        <Fragment>
            <div className="row mt-5">
                <div className="col-12 align-self-center">
                    <Avatar alt="euphony" src={Logo} className={classes.large}/>
                </div>
            </div>

            <Divider variant="middle" className="divider mt-5"/>

            <p className="text-center mt-2 titleCv display-4">
                FABIEN <span className="colorDep">COLL</span></p>
            <p className="adjustTitle1 text-center">2800 CHARTRES -
                <span className="colorGreen"> contact@euphony.fr</span>
            </p>
            <p className="text-center">Je suis développeur web & webdesigner freelance.</p>

            <Divider variant="middle" className="divider mt-2"/>

            <div className="row mt-4">
                <div className="col-12 text-center">
                    <LinkedInIcon className="iconeCv mr-4"/>
                    <HttpIcon className="iconeCv mr-4"/>
                    <GitHubIcon className="iconeCv mr-4"/>
                </div>
            </div>

            <Divider variant="middle" className="divider mt-3"/>

            <div className="row mt-4">
                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12
                p-4 text-justify pl-3">
                    <p>Diplômé d‘un titre professionnel [Développeur Web & Web
                        mobile], j‘évolue actuellement dans le domaine du
                        développement web ( Back & /ou Front) en Freelance.
                        Ouvert à toutes propositions raisonbales en CDI, dans les départements
                        présenté ci-contre, n'hésitez pas à me contacter sur linkedin ou par mail.
                        Bonne visite sur mon espace CV.
                    </p>
                </div>
                <div className="col-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 p-4 placeXl">
                    <div className="row colCv">
                        <RoomIcon className="iconeMr colorGreen"/>28 - Eure-et-Loir
                    </div>
                    <div className="row colCv mt-1">
                        <RoomIcon className="iconeMr colorGreen"/>78 - Yvelines
                    </div>
                    <div className="row colCv mt-1">
                        <RoomIcon className="iconeMr colorGreen"/>Paris XIV
                    </div>
                    <div className="row colCv mt-1">
                        <RoomIcon className="iconeMr colorGreen"/>Paris V
                    </div>
                    <div className="row colCv mt-1">
                        <RoomIcon className="iconeMr colorGreen"/>Paris VI
                    </div>
                    <div className="row colCv mt-1">
                        <HomeWorkIcon className="iconeMr colorGreen"/>Télétravail
                    </div>
                </div>

                <div className="col-md-12 col-sm-12 col-xs-12 p-4 placeMd">

                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12"><RoomIcon className="iconeMr colorGreen"/>28 -
                            Eure-et-Loir
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12"><RoomIcon className="iconeMr colorGreen"/>78 -
                            Yvelines
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12"><RoomIcon className="iconeMr colorGreen"/>Paris
                            XIV
                        </div>

                    </div>
                    <div className="row mt-2">
                        <div className="col-md-4 col-sm-12 col-xs-12"><RoomIcon className="iconeMr colorGreen"/>Paris V
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12"><RoomIcon className="iconeMr colorGreen"/>Paris VI
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12"><HomeWorkIcon className="iconeMr colorGreen"/>Télétravail
                        </div>
                    </div>

                </div>
            </div>

        </Fragment>
    );
}

export default CvAPropos;
