import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
    return (
        <div className='SearchForm'>
            <input
                type="text"
                placeholder='Search for blogs'
            />
        </div>
    );
};

export default Searchbar;
