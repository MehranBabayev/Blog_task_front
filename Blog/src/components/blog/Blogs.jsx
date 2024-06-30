import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import BlogCategories from './BlogCategories';
import Blog from './Blog';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchBlogs,
    getBlogError,
    getBlogStatus,
    getFilteredBlogs
} from '../../features/blogsDataSlice';
import BlogTags from './BlogTags';

const Blogs = () => {
    const dispatch = useDispatch()
    const blogStatus = useSelector(getBlogStatus)
    const blogs = useSelector(getFilteredBlogs)

    useEffect(() => {
        if (blogStatus === 'idle') {
            dispatch(fetchBlogs());
        }
    }, [blogStatus, dispatch]);

    return (
        <main expand="lg" className="bg-body-tertiary">
            <div>
                <h2 className='blog-header'>Blog</h2>
            </div>
            <Container fluid className="main-con" >
                <Container fluid className='blog-con'>
                    {
                        blogs.map((blog => <Blog key={blog.id} blog={blog} />))
                    }
                </Container>
                <Container fluid className='cat-con'>
                    <BlogCategories />
                    <BlogTags />
                </Container>
            </Container>

        </main>
    )
}

export default Blogs