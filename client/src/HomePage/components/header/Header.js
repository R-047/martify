import React from 'react'

import Logo from './logo/Logo'
import Navbar from './navbar/Navbar'
import SellerBtn from './sellerBtn/SellerBtn'
import SlideBtn from './slideBtn/SlideBtn'

import './header.css'

function Header() {
    return (
        <div className="headerWrapper">
            <header className="headerContainer">
                <SlideBtn />
                <Logo StyleClassName='HeaderLogo'/>
                <Navbar NavbarStyleClassName='navbarHeader' NavContainerStyleClassName='navContainerHeader' />
                <SellerBtn StyleClassName='HeaderSlrBtn'/>
            </header>
        </div>

    )
}

export default Header
