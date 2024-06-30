import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

const NavCategories = () => {
    return (
        <ul className='nav__categories'>
            <li className='nav__cat'>
                Home
            </li>
            <li className='nav__cat'>
                Blogs
            </li>
            <li className='nav__cat'>
                About
            </li>
            <li className='nav__cat'>
                Contact
            </li>
        </ul>
    )
}

export default NavCategories