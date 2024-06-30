import React from 'react'
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'

const NavCategory = () => {
    const dispatch = useDispatch()
    
    return (
            <li className='nav__cat'>
                cat
            </li>
    )
}

export default NavCategory