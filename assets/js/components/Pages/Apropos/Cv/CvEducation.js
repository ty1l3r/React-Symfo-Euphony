import React, {Fragment} from 'react';

function CvEducation(props) {
    return (
        <Fragment>
            <div className="row text-center titleCv display-4"> EDU <span className="colorDep">CATION</span></div>
            <div className="row">
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12
                order-xl-1 order-lg-1 order-md-2 order-sm-2 order-sx-2 mt-4 p-0">
                    <p className="titleCv fontTitle">DEVELOPPEUR WEB & WEB MOBILE</p>
                    <p className="subtitleCv titleCv">
                        <a className="myLink"
                           href="https://www.formation.etoile.regioncentre-valdeloire.fr/formation/AFPA%20de%20Chartres/Titre%20professionnel%20d%C3%A9veloppeur%20web%20et%20web%20mobile/212044">
                            AFPA
                        </a>
                    </p>
                    <p className="text-justify pr-5">
                        <span className="text-justify">Activités et associations : Développer la partie front-end et
                            back-end d'une application web etweb mobile en intégrant les recommandations de sécurité.
                        </span> <br/>
                        - Maquettage d'une application <br/>
                        - Réalisation d'une interface utilisateur web statique et adaptable <br/>
                        - Développement d'une interface utilisateur web dynamiqu <br/>
                        - Réalisation d'une interface utilisateur avec une solution de gestion de contenu ou
                        e-commerce <br/>
                        - Création d'une base de données <br/>
                        - Développement des composants d’accès aux données <br/>
                        - Développement de la partie back-end d’une application web ou web mobile <br/>
                        - Elaboration et mise en œuvre des composants dans une application de gestion de contenu <br/>
                    </p>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12
                order-xl-2 order-lg-2 order-md-1 order-sm-1 order-sx-1 mt-4 p-0">
                    <p className="titleCv fontDate colorDep">2009 -2010</p>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12
                order-xl-1 order-lg-1 order-md-2 order-sm-2 order-sx-2 mt-4 p-0">
                    <p className="titleCv fontTitle">Architectural Glass concept</p>
                    <p className="subtitleCv titleCv">
                        <a className="myLink"
                           href="https://www.cardiff.ac.uk/architecture">
                            Welsh School of Architecture, Cardiff University
                        </a>
                    </p>
                    <p className="text-justify pr-5">
                        <span className="text-justify">Innovativ Glass Concept : Immersion professionnelle sur des projets
                            de hautes technicité.
                        </span> <br/>
                        - Conception & réalisation complète d'un projet architectural verrier. <br/>
                        - Innovation technologique.
                    </p>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12
                order-xl-2 order-lg-2 order-md-1 order-sm-1 order-sx-1 mt-4 p-0">
                    <p className="titleCv fontDate colorDep">2009 - 2010</p>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12
                order-xl-1 order-lg-1 order-md-2 order-sm-2 order-sx-2 mt-4 p-0">
                    <p className="titleCv fontTitle">Brevet des Métiers d'Arts</p>
                    <p className="subtitleCv titleCv">
                        <a className="myLink"
                           href="https://www.ac-paris.fr/serail/jcms/s1_1879560/fr/accueil">
                            Lycée Lucas de Nehou
                        </a>
                    </p>
                    <p className="text-justify pr-5">
                        <span className="text-justify">Perfectionement des compétences artistiques et techniques.Décoration
                            sur verre, façonnage, peinture sur verre et vitrail. Autonomie professionnelle. Solutions
                            techniques et esthétiques concernant l'élaboration et la réalisation d'un projet.
                        </span> <br/>
                        - Aptitude au travail manuel et artistique <br/>
                        - Soin, minutie et précision <br/>
                        - Sensibilité aux couleurs et à la lumière <br/>
                        - Intérêt pour le verre, l’histoire des arts et les arts appliqués <br/>
                        - Sens de l’organisation et de la gestion.
                    </p>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12
                order-xl-2 order-lg-2 order-md-1 order-sm-1 order-sx-1 mt-4 p-0">
                    <p className="titleCv fontDate colorDep">2007 - 2009</p>
                </div>
            </div>

        </Fragment>
    );
}

export default CvEducation;