import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

function Card({movie}) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
        <Link to={`/films/${movie._id}`} style={{textDecoration: 'none'}}>
            <div className="movie-card">
                <img src={movie.previewImg} alt="Preview Image" className="img-fluid" />
                <p>
                    {movie.length} | {movie.category}
                </p>
            </div>
        </Link>
    </div>
  )
}

export default Card