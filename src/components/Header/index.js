
import { List,ListItem, ListItemText, SwipeableDrawer, useMediaQuery, useTheme, Tab, styled, AppBar, Toolbar, useScrollTrigger, IconButton} from '@mui/material';
import React, {useState} from 'react';
import { DonateButton } from '../headerComponents/DonateButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'

const StyledTypography = styled('p')(({theme}) => ({
    color: theme.palette.secondary.main,
    fontFamily: 'Cinzel',
    fontStyle: 'normal',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '360px',
    width: '100%',
    fontSize: '24px',
    margin: 0,
    [theme.breakpoints.down("xl")]: {
        fontSize: '20px',
        maxWidth: '264px'
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: '16px',
        maxWidth: '244px',
        minWidth: '211px'
    },
    [theme.breakpoints.down("md")]: {
        fontSize: '16px',
        maxWidth: '240px'
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '10px',
        maxWidth: '150px',
        minWidth: '124px'
    },
  }))

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    maxHeight: '144px',
    height: '100%',
    [theme.breakpoints.down("lg")]: {
        height: '112px',
    },
    [theme.breakpoints.down("md")]: {
        height: '96px',
    },
    [theme.breakpoints.down("sm")]: {
        height: '80px',
    },
}))

const StyledAppBar = styled(AppBar)(({theme}) => ({
    zIndex: theme.zIndex.modal,
    position: 'relative',
    // width: '100%',
    // maxWidth: '1728px'
}))  

const StyledDrawer = styled(SwipeableDrawer)(({theme}) => ({
    color: theme.palette.primary.main,
    '& .css-1160xiw-MuiPaper-root-MuiDrawer-paper' : {
        backgroundColor: theme.palette.primary.main,
    }
})) 

const StyledList = styled(List)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    // width: '240',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down("md")]: {

    },
    [theme.breakpoints.down("sm")]: {
 
    },
})) 

const StyledTab = styled(Tab) (({theme}) => ({
    ...theme.typography.tab,
    fontSize: '20px',
    lineHeight: '25px',
    padding: 0,
    minHeight: 'auto',
    disableTypography: 'true',
    [theme.breakpoints.down("xl")]: {
        fontSize: '18px',
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: '14px',

    },
    [theme.breakpoints.down("md")]: {
        // fontSize: '16px',
    },
    [theme.breakpoints.down("sm")]: {
        // fontSize: '16px'
    },
    
}))

const StyledTabs = styled('div') (({theme}) => ({
    // justifyContent: 'center',
    gap: '30px',
    display: 'flex',
    margin: '14px 0px 16px 0px',
    [theme.breakpoints.down("xl")]: {
        margin: '14px 0px 16px 0px',
        gap: '20px'
    },
    [theme.breakpoints.down("lg")]: {
        margin: '12px 0px 14px 0px',
        gap: '0px'
    },
    [theme.breakpoints.down("md")]: {
        // margin: '60px 0px 60px 0px',
        gap: '25px'
    },
    [theme.breakpoints.down("sm")]: {
        // margin: '60px 0px 60px 0px',
        gap: '25px'
    },
}))

const StyledDrawerItem = styled(ListItemText) (({theme}) => ({
    ...theme.typography.tab,
    color: theme.palette.secondary.main,
    justifyContent: 'center'
}))

const IconButtonContainer = styled(IconButton) (({theme}) => ({
    '&:hover':{
        backgroundColor: "transparent"
    },
    padding: 0,
    // [theme.breakpoints.down(310)]: {
    //     margin: '0px 170px 0px 0px'
    // },
}))

const StyledMenuIcon = styled(MenuIcon) (({theme}) => ({
    width: '100%',
    height: '100%',
    maxWidth: '40px',
    maxHeight: '25px',
    [theme.breakpoints.down("md")]: {
        maxWidth: '40px',
        maxHeight: '40px',
    },
    [theme.breakpoints.down("sm")]: {
        maxWidth: '30px',
        maxHeight: '22px',
    },
}))

const Wrapper = styled('div')(({theme}) => ({
    padding: '40px 115px',
    justifyContent: 'space-between',
    display: 'flex',
    gap: '20px',
    width: '100%',
    flexDirection: 'row',
    [theme.breakpoints.down("xl")]: {
        padding: '30px 80px',
        gap: '20px'
    },
    [theme.breakpoints.down("lg")]: {
        padding: '0px 40px',
        gap: '30px'
    },
    [theme.breakpoints.down("md")]: {
        padding: '23px 65px',
        gap: '160px'
    },
    [theme.breakpoints.down("sm")]: {
        padding: '14px 20px',
        gap: '150px'
    },
    [theme.breakpoints.down(310)]: {
        padding: '14px 10px',
        gap: '100px'
    },
})) 

const Container = styled('div') (({theme}) => ({
    justifyContent: 'center',
    gap: '30px',
    display: 'flex',
    flexDirection: 'row',
    padding: '4px 0px',
    [theme.breakpoints.down("xl")]: {
        gap: '25px'
    },
    [theme.breakpoints.down("lg")]: {
        gap:'0px'
    },
    [theme.breakpoints.down("md")]: {
        
    },
    [theme.breakpoints.down("sm")]: {
        
    },
}))

const ToolbarMargin = styled(Toolbar) (({theme}) =>({
    ...theme.mixins.toolbar,
    marginBottom: '5.1em',
    [theme.breakpoints.down("lg")]: {
        marginBottom: '3em',
    },
    [theme.breakpoints.down("md")]: {
        marginBottom: '2em',
    },
    [theme.breakpoints.down("sm")]: {
        marginBottom: '1.5em',
    },
}))

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function Header() {

    const theme = useTheme()
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const [value, setValue] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleChange = (e, value) => {
      setValue(value);
    };
    const tabs = (
        <>
            <StyledTabs value={value} onChange={handleChange} indicatorColor='secondary' textColor='secondary'>
                <StyledTab label="Home" component={Link} to="/" />
                <StyledTab label="Prayers Time" component={Link} to="/prayers"/>
                <StyledTab label="Services" component={Link} to="/services"/>
                <StyledTab label="Contact Us" component={Link} to="/contact"/>
                <StyledTab label="Location" component={Link} to="/location"/>
            </StyledTabs>
        </>
    )
    const drawer =(
        <>
            <StyledDrawer anchor="right" disableBackdropTransition={!iOS} 
                disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)}
                onOpen={()=>setOpenDrawer(true)}>
                <ToolbarMargin/>    
                <StyledList disablePadding>
                    <ListItem onClick={()=>setOpenDrawer(false)} divider component={Link} to="/"> 
                        <StyledDrawerItem disableTypography>Home</StyledDrawerItem>
                    </ListItem>
                    <ListItem onClick={()=>setOpenDrawer(false)} divider component={Link} to="/prayers"> 
                        <StyledDrawerItem disableTypography>Prayers Time</StyledDrawerItem>
                    </ListItem>
                    <ListItem onClick={()=>setOpenDrawer(false)} divider component={Link} to="/services"> 
                        <StyledDrawerItem disableTypography>Services</StyledDrawerItem>
                    </ListItem>
                    <ListItem onClick={()=>setOpenDrawer(false)} divider component={Link} to="/contact"> 
                        <StyledDrawerItem disableTypography>Contact Us</StyledDrawerItem>
                    </ListItem>
                    <ListItem onClick={()=>setOpenDrawer(false)} divider component={Link} to="/location"> 
                        <StyledDrawerItem disableTypography>Location</StyledDrawerItem>
                    </ListItem>
                    <ListItem onClick={()=>setOpenDrawer(false)} divider component={Link} to="/donate"> 
                        <StyledDrawerItem disableTypography><DonateButton/></StyledDrawerItem>
                    </ListItem>
                </StyledList>
            </StyledDrawer>
            <IconButtonContainer onClick={()=>setOpenDrawer(!openDrawer)} disableRipple>
                <StyledMenuIcon/>
            </IconButtonContainer>
        </>
    )

    return (
        <>     
        <ElevationScroll>
            <StyledAppBar>
                <StyledToolbar disableGutters disablePadding>
                    <Wrapper>
                        <StyledTypography color="secondary">South Boston VA Masjid and Islamic Center</StyledTypography>
                        <Container>
                            {matches ? drawer : tabs}
                            {matches ? null : <DonateButton/>}
                        </Container>
                    </Wrapper>
                </StyledToolbar>
            </StyledAppBar>
        </ElevationScroll>
        </>
    )
}
