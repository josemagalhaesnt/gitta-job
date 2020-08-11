import React from 'react';

import logo from '../../assets/img/logo-white.png';
import { StyledNavbar, LogoImage } from './styles';
// import SearchIcon from '@material-ui/icons/Search';

const Navbar = () => {
    return (
        <StyledNavbar>
            <LogoImage src={logo} alt="logo" />
        </StyledNavbar>
    );
};

export default Navbar;
