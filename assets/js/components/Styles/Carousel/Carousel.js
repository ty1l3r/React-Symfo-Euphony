import React from 'react';
import './css/demo.css';
import './css/style2.css';
import './css/queries.css'

const CarouselHome = () => {
    return (
        <div>
            <ul className="cb-slideshow">
                <li><span>Image 01</span>
                    <div><h3>WEL·COM·E</h3></div>
                </li>
                <li><span>Image 02</span>
                    <div><h3>DEV·LOPER</h3></div>
                </li>
                <li><span>Image 03</span>
                    <div><h3>I·D·E·A·</h3></div>
                </li>
                <li><span>Image 04</span>
                    <div><h3>GRA·PHI·CS</h3></div>
                </li>
                <li><span>Image 05</span>
                    <div><h3>TECH·NO·LOGY</h3></div>
                </li>
                <li><span>Image 06</span>
                    <div><h3>HA·PY·NESS</h3></div>
                </li>
            </ul>
            <div className="container q-Title mt-5">
                <header className="adjustTitle bg-dark rounded mt-1">
                    <h1 className="changeColor">EUPHONY |
                        <span className="changeColor1">Fabien Coll</span></h1>
                    <h2 className="changeColor1">
                        Webdesigner, developer freelance & Graphiste.
                    </h2>
                    <h2 className="codrops-demos changeColor1">
                        Start tour on the hamburger menu !
                    </h2>
                </header>
            </div>
        </div>

    );
};

export default CarouselHome;
