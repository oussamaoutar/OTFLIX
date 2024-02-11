import React, { useState, useEffect } from 'react'
import './publishedBlog.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function PublishedBlog() {
    const { idBlog } = useParams();
    const [blogs, setBlogs] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/data/blogData.json");
            setBlogs(res.data);
        } catch(err) {
            console.log(err);
        }
    };  

    useEffect(() => {
        fetchData()
    }, [idBlog]);

    const blog = blogs.find(b => b._id === parseInt(idBlog));

    return (
        <section id="blogs" className="blogs">
            <div className="container-fluid">
                {!blogs.length ? <div className="row" style={{color: "#ffffff"}}><h4>Loading...</h4></div> : 
                    <>
                        <div className="row">
                            <h4 className="blog-title">Blog #{idBlog} - By : {blog.author.name}</h4>
                        </div>
                        <div className="row mt-5 content">
                            <span className='date'>Date : {blog.date}</span>
                            <h3 className='title'><u><i>{blog.title}</i></u></h3>
                            <div className='img-container'><img className='img-fluid img-blog' src={blog.thumbnail} alt='blog photo' /></div>
                            <p className='blog-desc'>"{blog.description}"</p>
                        </div>
                    </>
                }
            </div>
        </section>
    )
}

export default PublishedBlog