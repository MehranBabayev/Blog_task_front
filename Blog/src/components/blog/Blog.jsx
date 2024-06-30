import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaRegCalendarDays } from "react-icons/fa6";
import { GoFileDirectory } from "react-icons/go";
import { MdOutlineComment } from "react-icons/md";

const Blog = ({ blog }) => {
    return (
        <Card className='blog-card'>
            <Card.Img variant="top" src={blog.blog_image} className='blog-card-img' />
            <Card.Body>
                <Card.Title className='card-title'>{blog.blog_title}</Card.Title>
                <div className='card-icons'>
                    <span><FaRegCalendarDays />{blog.published_date}</span>
                    <span>
                        <GoFileDirectory />
                        {
                            blog.categories[0].name
                        }
                    </span>
                    <span><MdOutlineComment />{blog.blog_comments_count} comments</span>
                </div>
                <Card.Subtitle className='card-subtitle' >
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </Card.Subtitle>
                <div className='card-btns'>
                    <Button className='card-btn' >Read more</Button>
                    <Button className='card-btn like-btn' >Like</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Blog