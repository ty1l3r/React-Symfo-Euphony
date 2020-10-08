import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import Logo from '../../../images/eupohonylogo.jpg'
import Divider from "@material-ui/core/Divider";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


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


const Euphony = () => {

    const classes = useStyles();
    return (


        <div className="container mt-5 ">

            <div className="row">
                <div className="col-12 align-self-center">
                    <Avatar alt="euphony" src={Logo} className={classes.large}/>
                </div>
            </div>

            <Divider variant="middle" className="divider mt-5"/>
            <br/>

            <div className="row">

                <div className="col-xl-6">

                    <div className="card border styleCard mb-3">
                        <div className="card-header"> Euphony</div>
                        <div className="card-body">
                            <h4 className="card-title">Développeur Web</h4>
                            <p className="card-text"> Quelques exemples de texte rapide pour construire
                                sur le titre de la carte et constituer l'essentiel du contenu de la carte.</p>
                        </div>
                    </div>

                </div>

                <div className="col-xl-6">
                    {/*Card 1*/}
                    <div className="card border styleCard mb-3">
                        <div className="row">
                            <div
                                className="col-sm-2 col-md-2 col-lg-3 d-flex d-sm-flex d-md-flex d-lg-flex justify-content-center
                                align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center
                                align-items-md-center justify-content-lg-center align-items-lg-center">
                                <EmojiObjectsIcon className="iconEuphony"/>
                            </div>
                            <div className="col-sm-10 col-md-10 col-lg-9">
                                <p className="d-flex justify-content-left styleCardTitle">Titre</p>
                                <p className="d-flex justify-content-left styleCardContent">Lorem lorem lorem Lorem
                                    lorem lorem </p>
                            </div>
                        </div>
                    </div>
                    {/*EO Card1*/}
                    {/*Card 2*/}
                    <div className="card border styleCard mb-3">
                        <div className="row">
                            <div
                                className="col-sm-2 col-md-2 col-lg-3 d-flex d-sm-flex d-md-flex d-lg-flex justify-content-center
                                align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center
                                align-items-md-center justify-content-lg-center align-items-lg-center">
                                <EmojiObjectsIcon className="iconEuphony"/>
                            </div>
                            <div className="col-sm-10 col-md-10 col-lg-9">
                                <p className="d-flex justify-content-left styleCardTitle">Titre</p>
                                <p className="d-flex justify-content-left styleCardContent">Lorem lorem lorem Lorem
                                    lorem lorem </p>
                            </div>
                        </div>
                    </div>
                    {/*EO Card2 */}
                    {/*Card 3 */}
                    <div className="card border styleCard mb-3">
                        <div className="row">
                            <div
                                className="col-sm-2 col-md-2 col-lg-3 d-flex d-sm-flex d-md-flex d-lg-flex justify-content-center
                                align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center
                                align-items-md-center justify-content-lg-center align-items-lg-center">
                                <EmojiObjectsIcon className="iconEuphony"/>
                            </div>
                            <div className="col-sm-10 col-md-10 col-lg-9">
                                <p className="d-flex justify-content-left styleCardTitle">Titre</p>
                                <p className="d-flex justify-content-left styleCardContent">Lorem lorem lorem Lorem
                                    lorem lorem </p>
                            </div>
                        </div>
                    </div>
                    {/*EO Card 3 */}
                    {/*Card 4 */}
                    <div className="card border styleCard mb-3">
                        <div className="row">
                            <div
                                className="col-sm-2 col-md-2 col-lg-3 d-flex d-sm-flex d-md-flex d-lg-flex justify-content-center
                                align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center
                                align-items-md-center justify-content-lg-center align-items-lg-center">
                                <EmojiObjectsIcon className="iconEuphony"/>
                            </div>
                            <div className="col-sm-10 col-md-10 col-lg-9">
                                <p className="d-flex justify-content-left styleCardTitle">Titre</p>
                                <p className="d-flex justify-content-left styleCardContent">Lorem lorem lorem Lorem
                                    lorem lorem </p>
                            </div>
                        </div>
                    </div>
                    {/*EO Card 4 */}
                </div>

            </div>

        </div>

    );
};

export default Euphony;
