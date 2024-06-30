import React, { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import {
    fetchCategories,
    getAllCategories,
    getCategoryStatus,
    getCategoryError
} from '../../features/categoriesDataSlice';
import { filterBlogsByCategory } from '../../features/blogsDataSlice';
import { useDispatch, useSelector } from 'react-redux';

const BlogCategories = () => {
    const dispatch = useDispatch()
    const blogCatStatus = useSelector(getCategoryStatus)
    const categories = useSelector(getAllCategories)

    useEffect(() => {
        if (blogCatStatus === 'idle') {
            dispatch(fetchCategories());
        }
    }, [blogCatStatus, dispatch]);

    return (
        <ListGroup>
            <ListGroup.Item as="li">Categories</ListGroup.Item>
            <ListGroup.Item
                className='blog-cat'
                as="li"
                onClick={() => dispatch(filterBlogsByCategory('All blogs'))}
            >
                All blogs
            </ListGroup.Item>
            {
                categories.map((cat) =>
                    <ListGroup.Item
                        className='blog-cat'
                        as="li"
                        key={cat.id}
                        onClick={() => dispatch(filterBlogsByCategory(cat.id))}
                    >
                        {cat.name}
                    </ListGroup.Item>)
            }
        </ListGroup>
    )
}

export default BlogCategories