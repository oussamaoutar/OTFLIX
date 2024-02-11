import React, { useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/blogDataSlice';

function Blog() {
    const dispatch = useDispatch();
    const blogData = useSelector((state) => state.blogData);
    useEffect(() => {
        dispatch(fetchData("http://localhost:3000/data/blogData.json"));
    }, [dispatch]);

    return (
        <section id="blogs" className="blogs">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Blogs</h4>
                </div>
                <div className="row mt-5">
                    {blogData.data && blogData.data.length ? blogData.data.map(blog => (
                        <BlogCard key={blog._id} blog={blog} />
                    )) : <p style={{color: "#ffffff"}}>Loading...</p>}
                </div>
            </div>
        </section>
    );
}

export default Blog