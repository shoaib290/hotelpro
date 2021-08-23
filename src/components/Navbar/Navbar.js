import React, { useEffect, useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from '../../assets/logo.png';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SettingsIcon from '@material-ui/icons/Settings';
import SvgIcon from '@material-ui/core/SvgIcon';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RoomIcon from '@material-ui/icons/Room';
import KitchenIcon from '@material-ui/icons/Kitchen';






const useStyles = makeStyles((theme) => ({


  root: {

    height: 50,
    flexGrow: 1,

    // maxWidth: 400,
    '& > svg': {
      margin: theme.spacing(2),
    },
  },


  grow: {
    flexGrow: 1,
    backgroundColor: "red"
  },


  menuButton: {
    marginRight: theme.spacing(2),

  },


  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      zIndex: '0'
    },
  },


  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',

    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  inputRoot: {
    color: 'inherit',

  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

  },


}));



export default function PrimarySearchAppBar() {

  const History = useHistory();
  const classes = useStyles();



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [navBarData, setNavBarData] = React.useState([]);


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };



  const LogoutHandler = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    History.push('/');
    window.location.reload();
  }

  const ProfileHandler = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    History.push('/Profile');
  }

  const BookingHandler = () => {
    setAnchorEl(null);
    History.push('/Bookings');
  }

  const Foodhandler = () => {
    setAnchorEl(null);
    History.push('/FoodOrders');
  }

  const DashboardHandler = () => {
    setAnchorEl(null);
    History.push('/Dashboard');
  }

  const onNavigateHandler = (value) => {
    console.log("pass hori value", value);
    History.push(`${value}`);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={ProfileHandler}>
        <AccountCircleIcon color="primary" />
        Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <SettingsIcon color="primary" />
        Settings</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ContactSupportIcon color="primary" />
        Customer Care</MenuItem>
      <MenuItem >
        <InfoIcon color="primary" />
        About US</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <HelpIcon color="primary" />
        Need Help?</MenuItem>
      <MenuItem onClick={LogoutHandler}>
        <ExitToAppIcon color="primary" />
        Log Out</MenuItem>
    </Menu>
  );



  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );



  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event, data) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };








  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);



  return (
    <>

      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <img src={logo} style={{ height: "50px", width: "150px", marginRight: "20px" }} />

            <div style={{marginLeft:"30px"}}>
              <Button variant="contained" color="pink" 
              onClick={DashboardHandler}
              >
              <DashboardIcon color="primary"></DashboardIcon>
                Dashboard
              </Button>
            </div>

            <div style={{marginLeft:"30px"}}>
              <Button variant="contained" color="Pink" 
              onClick={BookingHandler}
              >
                <RoomIcon color="primary"></RoomIcon>
                Room Bookings
              </Button>
            </div>

            <div style={{marginLeft:"30px"}}>
              <Button variant="contained" color="Pink"
              onClick={Foodhandler}
              >
                <KitchenIcon color="primary"></KitchenIcon>
                Food Orders
              </Button>
            </div>


            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>


            <div className={classes.sectionMobile}>



            </div>

          </Toolbar>

        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </>
  );
}
