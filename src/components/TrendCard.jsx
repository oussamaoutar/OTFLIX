import React from 'react';
import './trendCard.css';
import { Link } from 'react-router-dom';

function TrendCard({slide}) {
  return (
    <div className="trend-card">
        <Link to={`/films/${parseInt(slide._id)}`}><img src={slide.previewImg} alt="Preview Image" className="img-fluid" /></Link>
    </div>
  )
}

export default TrendCard