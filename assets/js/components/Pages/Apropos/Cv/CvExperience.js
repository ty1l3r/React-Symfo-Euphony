import React, {Fragment} from 'react';

function CvExperience(props) {
    return (
        <Fragment>
            <div className="resume-section-content">
                <p>EXPERIENCE</p>
                <p>23 Rue Paul Bert 28300 MAINVILLIERS</p>
                <hr/>
                <p>Le <strong>Lorem Ipsum</strong> est simplement du faux texte employé dans la composition
                    et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                    l&#39;imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
                    ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il
                    n&#39;a pas fait que survivre cinq siècles, mais s&#39;est aussi adapté à la bureautique
                    informatique, sans que son contenu n&#39;en soit modifié. Il a été
                    popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des
                    passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de
                    mise en page de texte, comme Aldus PageMaker.</p>
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
            </div>
        </Fragment>
    );
}

export default CvExperience;