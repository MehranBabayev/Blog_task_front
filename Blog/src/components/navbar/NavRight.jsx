import React, { useState } from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from 'react-redux';
import Weather from './Weather';

const NavRight = () => {

    return (
        <div className='nav__right'>
            <i className='nav__burger_menu nav_hover burger_right'>
                <RxHamburgerMenu />
            </i>
            <i className='nav__user_icon nav_hover'>
                <AiOutlineUser />
            </i>
            <i
                className='nav__wishlist_icon nav_hover'
                title="View your likes"
            >
                <HiOutlineHeart />
                <span className='nav__wish_count'>
                </span>
            </i>
            <i
                className='nav__cart_icon nav_hover'
                title="Weather"
            >
                <Weather />
            </i>
        </div>
    )
}

export default NavRight