import React, {Fragment, useState} from 'react';
import './Navbar.css';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Toolbar
} from '@material-ui/core';
import {List as ListIcon, Menu as MenuIcon} from '@material-ui/icons';
import AccountBoxIcon from '@material-ui/icons/SentimentVerySatisfied';
import BuildIcon from '@material-ui/icons/Build';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(style => ({
    menuIcon: {
        marginRight: style.spacing(2),
    },
    list: {
        width: '200px',
        height: '30px'
    },
    menu: {
        marginLeft: '20px',
        borderBottom: 'white'
    }

}))

const NavBar = () => {
    //styles
    const classes = useStyles();
    //state
    const [drawerOpen, setDrawerOpen] = useState(false);
    //functions
    const toogleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    };

    const draweritems = [
        {text: 'ACCUEIL', icon: <ListIcon fontSize="small"/>, divider: <Divider/>},
        {text: 'A PROPOS', icon: <AccountBoxIcon fontSize="small"/>},
        {text: 'SERVICES', icon: <BuildIcon fontSize="small"/>},
        {text: 'PORTOFOLIO', icon: <ImportantDevicesIcon fontSize="small"/>},
        {text: 'CLIENTS', icon: <ThumbUpAltIcon fontSize="small"/>},
        {text: 'CONTACT', icon: <ContactPhoneIcon fontSize="small"/>}
    ];
    const divider = [
        {divider: <Divider/>}
    ]

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton onClick={toogleDrawer}
                            className={classes.menuIcon}
                            edge="start"><MenuIcon/></IconButton>
                <Link href="/" underline="none" color="inherit" variant="h6">EUPHONY</Link>
                <Box flexGrow={1}/>
                <Button size="large">Login</Button>
                <Drawer anchor="left" variant="temporary" onClose={toogleDrawer} open={drawerOpen}>
                    <List className={classes.list}>
                        {draweritems.map(prop => (
                            <ListItem onClick={toogleDrawer} button key={prop.text}>
                                <Fragment>{prop.icon} </Fragment>
                                <ListItemText className={classes.menu}>{prop.text}</ListItemText>
                                {prop.divider}
                            </ListItem>
                        ))}
                    </List>

                </Drawer>


            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
