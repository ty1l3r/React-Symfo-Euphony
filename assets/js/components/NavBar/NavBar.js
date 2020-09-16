import React, {useState} from 'react';
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
    ListItemIcon,
    ListItemText,
    makeStyles,
    Toolbar,
} from '@material-ui/core';
import {List as ListIcon, Menu as MenuIcon} from '@material-ui/icons';
import AccountBoxIcon from '@material-ui/icons/SentimentVerySatisfied';
import BuildIcon from '@material-ui/icons/Build';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(style => ({
    menuIcon: {marginRight: style.spacing(2)},
    list: {width: '210px', height: '30px'},
    menu: {marginLeft: '30px'},
    align: { marginLeft: "12px" },
    top: {marginTop: '27.3%'},
    color: {color:"white"}
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
        {text: 'ACCUEIL', icon: <ListIcon fontSize="small"/>},
        {text: 'A PROPOS', icon: <AccountBoxIcon fontSize="small"/>},
        {text: 'SERVICES', icon: <BuildIcon fontSize="small"/>},
        {text: 'PORTOFOLIO', icon: <ImportantDevicesIcon fontSize="small"/>},
        {text: 'CLIENTS', icon: <ThumbUpAltIcon fontSize="small"/>},
        {text: 'CONTACT', icon: <ContactPhoneIcon fontSize="small"/>}
    ];

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton onClick={toogleDrawer}
                            className={classes.menuIcon}
                            edge="start"><MenuIcon/></IconButton>
                <Link to="/" underline="none" color="inherit" variant="h6">EUPHONY</Link>
                <Box flexGrow={1}/>
                <Button size="large">Login</Button>
                <Drawer anchor="left" variant="temporary" onClose={toogleDrawer} open={drawerOpen}>
                    <List className={classes.list} component="nav" aria-label="main mailbox folders">
                        {/*--------------------------------------------------------------------------------*/}
                        <Divider className={classes.top}/>
                        <ListItem button to="/" onClick={toogleDrawer}>
                            <ListItemIcon>
                                <Avatar>
                                    <HomeIcon className={classes.color}/>
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText className={classes.align} primary="ACCUEIL"/>
                        </ListItem>
                        <Divider/>
                        {/*--------------------------------------------------------------------------------*/}
                        <ListItem button to="/" onClick={toogleDrawer}>
                            <ListItemIcon>
                                <Avatar>
                                    <AccountBoxIcon className={classes.color}/>
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText className={classes.align} primary="&Agrave; PROPOS"/>
                        </ListItem>
                        <Divider/>
                        {/*--------------------------------------------------------------------------------*/}
                        <ListItem button to="/" onClick={toogleDrawer}>
                            <ListItemIcon>
                                <Avatar>
                                    <BuildIcon className={classes.color}/>
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText className={classes.align} primary="SERVICES"/>
                        </ListItem>
                        <Divider/>
                        {/*--------------------------------------------------------------------------------*/}
                        <ListItem button to="/" onClick={toogleDrawer}>
                            <ListItemIcon>
                                <Avatar>
                                    <ImportantDevicesIcon className={classes.color}/>
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText className={classes.align} primary="PORTOFOLIO"/>
                        </ListItem>
                        <Divider/>
                        {/*--------------------------------------------------------------------------------*/}
                        <ListItem button to="/" onClick={toogleDrawer}>
                            <ListItemIcon>
                                <Avatar>
                                    <ThumbUpAltIcon className={classes.color}/>
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText className={classes.align} primary="CLIENTS"/>
                        </ListItem>
                        <Divider/>
                        {/*--------------------------------------------------------------------------------*/}
                        <ListItem button to="/" onClick={toogleDrawer}>
                            <ListItemIcon>
                                <Avatar>
                                    <ContactPhoneIcon className={classes.color}/>
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText className={classes.align} primary="CONTACTS"/>
                        </ListItem>
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
