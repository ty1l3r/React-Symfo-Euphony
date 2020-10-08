import React, {useState} from 'react';
import './Apropos.css';
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Cv from "./Cv/Cv";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Euphony from "./Euphony";


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        paddingBottom: '20px',
    },
    focus: {
        focusVisible: 'false'
    }
});

const useStyles2 = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));


const Apropos = (...props) => {


    const classes = useStyles();
    const [toogleState, setToogleState] = useState('cv');
    /*const animation = () => {setToogleState('animation')}*/
    const goEuphony = () => {
        setToogleState('euphony')
    };
    const goCv = () => {
        setToogleState('cv')
    };


    /* RETURN -------------------------------------------------------------------------------------*/
    return (
        <Container className="mt-2">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <div className={classes.root}>
                        <div className="center">
                            <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                                <Button className={` ${toogleState === 'cv' ? "buttonOn" : "buttonWidth"}`}
                                        onClick={goCv}>CV
                                </Button>
                                <Button className={` ${toogleState === 'euphony' ? "buttonOn" : "buttonWidth"}`}
                                        onClick={goEuphony}>Euphony
                                </Button>
                                <Button>Other</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <Divider/>

                    {toogleState === 'cv' ? <Cv/> : <></>}
                    {toogleState === 'euphony' ? <Euphony/> : <></>}


                </CardContent>
            </Card>
        </Container>
    );
};

export default Apropos;