import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import TourIcon from '@mui/icons-material/Tour';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';



const StyledLink = styled(Link)`
    text-decoration: none;
color: White;
    &:focus, &:hover, &:active {
        text-decoration: none;
        border-bottom: 2px solid white;
    }
`;




const MenuLink = styled(Menu)`
    position: absolute;
  top: -76px;
  left: -10px;
  

    height:100vh;
`;

export default function Navbar() {
const [open, setOpen] = useState(false);

const onHandle = ()=>{
setOpen(true);
}

const closeMenu = ()=>{
    setOpen(false);
}

  return (
      <>
    <AppBar style={{ backgroundColor: 'rgba(54, 51, 51, 0.3)'}} position="sticky" >

    <Container maxWidth="x1" style={{ backgroundColor: 'rgba(54, 51, 51, 0.3)'}}>
      <Toolbar  disableGutters style={{ backgroundColor: 'rgba(54, 51, 51, 0.3)' }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{fontFamily: 'Oleo Script Swash Caps', fontSize: "2.2rem", mr: 2, display: { xs: 'none', sm: 'flex', md: "none" } }}
        >
          DJoz
        </Typography>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontFamily: 'Oleo Script Swash Caps',fontSize: "1.5rem", mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
         Dandy DJs
        </Typography>

        

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <MenuIcon onClick = {onHandle} />
          </IconButton>
          
        </Box>



<Box sx = {{display: "flex", justifyContent: "center", width: {xs: "100%", md: "80%", sm: "80%"}}}>

<Typography
          variant="h6"
          sx={{fontFamily: 'Oleo Script Swash Caps', fontSize: "2.2rem", display: { xs: 'flex', sm: 'none' } }}
        >
          DJoz
        </Typography>

<Typography variant="p" >
<Button variant="text" sx={{color: "white", fontFamily: 'IBM Plex Sans', fontWeight: "bold", display: { xs: 'none', sm: 'flex' }, fontSize: { xs: '0.7rem', md: '1rem' }}}>
<StyledLink to="/musically" > HOME </StyledLink>
</Button>

</Typography>


<Typography variant="p" >
<Button variant="text" sx={{color: "white", fontFamily: 'IBM Plex Sans', fontWeight: "bold", display: { xs: 'none', sm: 'flex' }, fontSize: { xs: '0.7rem', md: '1rem' }}}><StyledLink to="/musically" > ABOUT </StyledLink></Button>
</Typography>

<Typography variant="p" >
<Button variant="text" sx={{color: "white", fontFamily: 'IBM Plex Sans', fontWeight: "bold", display: { xs: 'none', sm: 'flex' }, fontSize: { xs: '0.7rem', md: '1rem' }}}> <StyledLink to="/musically" > DISCOGRAPHY </StyledLink></Button>
</Typography>

<Typography variant="p" >
<Button variant="text" sx={{color: "white", fontFamily: 'IBM Plex Sans', fontWeight: "bold", display: { xs: 'none', sm: 'flex' }, fontSize: { xs: '0.7rem', md: '1rem' }}}> <StyledLink to="/musically" > TOURS </StyledLink></Button>
</Typography>

<Typography variant="p" >
<Button variant="text" sx={{color: "white", fontFamily: 'IBM Plex Sans', fontWeight: "bold", display: { xs: 'none', sm: 'flex' }, fontSize: { xs: '0.7rem', md: '1rem' }}}><StyledLink to="/musically" >VIDEOS </StyledLink></Button>
</Typography>





<Typography variant="p" >
<Button variant="text" sx={{color: "white", fontFamily: 'IBM Plex Sans', fontWeight: "bold", display: { xs: 'none', sm: 'flex' }, fontSize: { xs: '0.7rem', md: '1rem' }}}> <StyledLink to="/musically" > CONTACT </StyledLink></Button>
</Typography>


</Box>


<Box  sx = {{position: "absolute", right: "0px", display: "flex"}}>

<FacebookIcon sx = {{display: { xs: 'none', md: 'flex' }}} />
<InstagramIcon sx = {{display: { xs: 'none', md: 'flex' }}}/>
<LinkedInIcon sx = {{display: { xs: 'none', md: 'flex' }}}/>
<TwitterIcon sx = {{display: { xs: 'none', md: 'flex' }}}/>

</Box>

      </Toolbar>
      </Container>
  </AppBar>

<MenuLink open = {open} onClose = {closeMenu} >
<MenuList>
  <MenuItem onClick={closeMenu}>
    <ListItemIcon>
      <HomeIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText>HOME</ListItemText>
  </MenuItem>
  <MenuItem onClick={closeMenu}>
    <ListItemIcon>
      <InfoIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText>ABOUT</ListItemText>
  </MenuItem>
  <MenuItem onClick={closeMenu}>
    <ListItemIcon>
      <LibraryMusicIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText>DISCOGRAPHY</ListItemText>
  </MenuItem>

  <MenuItem onClick={closeMenu}>
    <ListItemIcon>
      <TourIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText>TOURS</ListItemText>
  </MenuItem>

  <MenuItem onClick={closeMenu}>
    <ListItemIcon>
      <MissedVideoCallIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText>VIDEOS</ListItemText>
  </MenuItem>

  <MenuItem onClick={closeMenu}>
    <ListItemIcon>
      <PermContactCalendarIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText>CONTACT</ListItemText>
  </MenuItem>

  <Divider />
  <MenuItem>
    <ListItemIcon>

    <FacebookIcon sx = {{marginRight: "10px"}}/>
<InstagramIcon sx = {{marginRight: "10px"}}/>
<LinkedInIcon sx = {{marginRight: "10px"}}/>
<TwitterIcon sx = {{marginRight: "10px"}}/>
    </ListItemIcon>
    
  </MenuItem>
</MenuList>
</MenuLink>

</>

  )
}
