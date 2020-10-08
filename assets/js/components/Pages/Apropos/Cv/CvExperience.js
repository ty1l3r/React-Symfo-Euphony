import React, {Fragment} from 'react';


function CvExperience(props) {
    return (
        <Fragment>
            <div className="row text-center titleCv display-4"> EXP <span className="colorDep">ERIENCE</span></div>
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12
                order-xl-1 order-lg-1 order-md-2 order-sm-2 order-sx-2 mt-4 p-0">
                    <p className="titleCv fontTitle">Développeur web full-Stack</p>
                    <p className="subtitleCv titleCv">Euphony</p>
                    <p className="text-justify pr-5">
                        - Géstion de projets web <br/>
                        - Concéption graphique & webdesign<br/>
                        - Développement web & web mobile <b>front-end</b> & <b>back-end</b> <br/>
                        - CMS : <b>WordPress</b>, <b> Drupal 8 </b> <br/>
                        - Frameworks & librairies : <b>Symfony 4</b>,<b> ReactJs</b>,<b> Meteor</b> <br/>
                        - <b>NodeJs</b>, <b>Npm</b>, <b>Composer</b> <br/>
                        - Maquettage (Mockflow, Photoshop) & Modèle Conceptuel de Données <br/>
                        - Base de données <b>SQL</b> & <b>NoSql</b> <br/>
                        - Interface d'administration <br/>
                        - Responsive design (compatibilité tous supports) <br/>
                    </p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12
                order-xl-2 order-lg-2 order-md-1 order-sm-1 order-sx-1 mt-4 p-0">
                    <p className="titleCv fontDate colorDep">Février 2020 - Présent</p>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12
                order-xl-1 order-lg-1 order-md-2 order-sm-2 order-sx-2 mt-4 p-0">
                    <p className="titleCv fontTitle">Développeur web full-Stack</p>
                    <p className="subtitleCv titleCv">
                        <a className="myLink" href="https://www.oxygenmedia.fr/"> oXygen Media - Bleu Nuage </a>
                    </p>
                    <p className="pr-5">
                        - Maquettage (Mockflow) & MDC (MYSQL) <br/>
                        - Développement front-end : <b>HTML</b>, <b>CSS</b>,<b> JQUERY</b>,<b> BOOTSTRAP</b><br/>
                        - Développement back-end : <b>SYMFONY 4</b>, <b>MySQL</b> <br/>
                        - Déploiement de site. <br/>
                        - Photoshop | Illustrator | DropBox | Trello
                    </p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12
                order-xl-2 order-lg-2 order-md-1 order-sm-1 order-sx-1 mt-4 p-0">
                    <p className="titleCv fontDate colorDep">Août 2019 - Février 2020</p>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12
                order-xl-1 order-lg-1 order-md-2 order-sm-2 order-sx-2 mt-4 p-0">
                    <p className="titleCv fontTitle">Junior Art Director</p>
                    <p className="subtitleCv titleCv">
                        <a className="myLink" href="https://www.moonlight-proj.com/"> Moonlight Project</a>
                    </p>
                    <p className="pr-5">
                        - Directeur artistique | Chef de projet Artway Chartres puis Moonlight Project <br/>
                        - Développement et innovation <br/>
                        - Scénographe officiel Fête des Lumières de Lyon [2014] & "Chartres en Lumières" [2011 -
                        2016]. <br/>
                        - Organisation d’événementiels
                    </p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12
                order-xl-2 order-lg-2 order-md-1 order-sm-1 order-sx-1 mt-4 p-0">
                    <p className="titleCv fontDate colorDep">Janvier 2011 - Présent</p>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12
                order-xl-1 order-lg-1 order-md-2 order-sm-2 order-sx-2 mt-4 p-0">
                    <p className="titleCv fontTitle">Chef D'entreprise</p>
                    <p className="subtitleCv titleCv">
                        Ak-Vitrail
                    </p>
                    <p className="pr-5">
                        - Artisanat | Création | Gestion économique & financière <br/>
                        - Appels d‘offres | Anticipation des coûts, contraintes & besoins <br/>
                        - Utilisation d‘outils de planification <br/>
                        - Relation Client / Mairies / Entreprises <br/>
                        - Communication & management
                    </p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12
                order-xl-2 order-lg-2 order-md-1 order-sm-1 order-sx-1 mt-4 p-0">
                    <p className="titleCv fontDate colorDep">Janvier 2011 - Janvier 2015</p>
                </div>
            </div>
        </Fragment>
    );
}

export default CvExperience;