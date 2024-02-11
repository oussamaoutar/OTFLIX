import React from 'react';
import './blogCard.css';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  if(!blog) {
    return null;
  }

  const { thumbnail, category, title, _id, author, date } = blog;

  return (
    <div className="blog col-xl-3 col-md-6 mb-4">
      <article>
        <div className="post-img">
          {thumbnail && <img src={thumbnail} alt="blog" className="img-fluid" />}
        </div>
        <p className="post-category">{category || 'No category'}</p>
        <h2 className="title">
          <Link to={`/blogs/${_id}`}>{title || 'Untitled'}</Link>
        </h2>
        <div className="d-flex align-items-center">
          {author && author.image && (
            <img src={author.image} alt="blog author img" className="img-fluid post-author-img flex-shrink-0" />
          )}
          <div className="post-meta">
            {author && <p className="post-author-list">{author.name || 'Unknown'}</p>}
            <p className="post-date">
              {date && <time dateTime={date}>{date}</time>}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogCard;
