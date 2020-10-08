import React, {useState} from 'react';
import './cv.css'
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CvAPropos from "./CvAPropos";
import CvExperience from "./CvExperience";
import CvEducation from "./CvEducation";

const Cv = () => {

    const [myState, setMyState] = useState('education')
    const goAbout = () => {
        setMyState('about')
    };
    const goExperience = () => {
        setMyState('experience')
    };
    const goEducation = () => {
        setMyState('education')
    };
    const goSkills = () => {
        setMyState('skills')
    };
    const goInterets = () => {
        setMyState('interets')
    };
    const goAwards = () => {
        setMyState('awards')
    };
    const goJson = () => {
        setMyState('json')
    }

    const [animate, setAnimate] = useState(false);
    const handleClick = () => setAnimate(!animate);

    return (

        <Container className="containerHeight mt-3">
            <div className="row">
                <div className="aProp col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <ul className="aul">
                        <li className="mt-2 mb-2 ali">
                            <Button variant="outlined" color="secondary"
                                    className={` ${myState === 'about' ? "buttonOnCv" : "buttonWidthCv"}`}
                                    onClick={goAbout}> a-propos
                            </Button>
                        </li>
                        <li className="mt-2 mb-2 ali">
                            <Button variant="outlined" color="secondary"
                                    className={` ${myState === 'experience' ? "buttonOnCv" : "buttonWidthCv"}`}
                                    onClick={goExperience}>
                                Experience
                            </Button>
                        </li>
                        <li className="mt-2 mb-2 ali">
                            <Button variant="outlined" color="secondary"
                                    className={` ${myState === 'education' ? "buttonOnCv" : "buttonWidthCv"}`}
                                    onClick={goEducation}>
                                éducation
                            </Button>
                        </li>
                        <li className="mt-2 mb-2 ali">
                            <Button variant="outlined" color="secondary"
                                    className={` ${myState === 'skills' ? "buttonOnCv" : "buttonWidthCv"}`}
                                    onClick={goSkills}>
                                skills
                            </Button>
                        </li>
                        <li className="mt-2 mb-2 ali">
                            <Button variant="outlined" color="secondary"
                                    className={` ${myState === 'json' ? "buttonOnCv" : "buttonWidthCv"}`}
                                    onClick={goJson}>
                                Soft Skills
                            </Button>
                        </li>
                        <li className="mt-2 mb-2 ali">
                            <Button variant="outlined" color="secondary"
                                    className={` ${myState === 'interets' ? "buttonOnCv" : "buttonWidthCv"}`}
                                    onClick={goInterets}>
                                interets
                            </Button>
                        </li>
                        <li className="mt-2 mb-2 ali">
                            <Button variant="outlined" color="secondary"
                                    className={` ${myState === 'awards' ? "buttonOnCv" : "buttonWidthCv"}`}
                                    onClick={goAwards}>
                                awards
                            </Button>
                        </li>
                        <li className="mt-2 mb-2 ali">
                            <Button variant="outlined" color="secondary"
                                    className={` ${myState === 'json' ? "buttonOnCv" : "buttonWidthCv"}`}
                                    onClick={goJson}>
                                json
                            </Button>
                        </li>

                    </ul>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12 padContent">
                    {myState === 'about' ? <CvAPropos/> : <></>}
                    {myState === 'experience' ? <CvExperience/> : <></>}
                    {myState === 'education' ? <CvEducation/> : <></>}
                </div>
            </div>
        </Container>


    );
};

export default Cv;
