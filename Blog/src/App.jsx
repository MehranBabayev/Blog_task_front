import React from 'react'
import Blogs from './components/blog/Blogs'
import Navbar from './components/navbar/Navbar'
import './assets/css/index.css'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <Navbar />
            <Blogs />
        </>

    )
}

export default App