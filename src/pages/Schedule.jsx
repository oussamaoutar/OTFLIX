import React, { useState, useEffect } from 'react';
import './schedule.css';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/movieDataSlice';

function Schedule() {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movieData);

  const filterList = [
    {
      _id: 1,
      name: "All",
      active: true,
    },
    {
      _id: 2,
      name: "Romance",
      active: false,
    },
    {
      _id: 3,
      name: "Action",
      active: false,
    },
    {
      _id: 4,
      name: "Thriller",
      active: false,
    },
    {
      _id: 5,
      name: "Horror",
      active: false,
    },
    {
      _id: 6,
      name: "Adventure",
      active: false,
    },
  ];

  useEffect(() => {
    dispatch(fetchData("http://localhost:3000/data/movieData.json"));
  }, [dispatch]);

  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);

  useEffect(() => {
    setMovies(movieData.data);
  }, [movieData]);

  const handleFilterMovies = category => {
    setFilters(
      filters.map(filter => {
        filter.active = false;
        if(filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    )
    if(category==='All') {
      setMovies(movieData.data);
      return;
    }
    setMovies(movieData.data.filter(movie => movie.category === category));
  };

  return (
    <section id="schedule" className="schedule">
        <div className="container-fluid">
            <div className="row">
              <h4 className="section-title">Coming Soon</h4>
            </div>
            <div className="row">
              <div className="filters">
                <ul className="filters">
                  {
                    filters.map(filter => (
                      <li key={filter._id} onClick={() => handleFilterMovies(filter.name)} className={`${filter.active ? 'active' : undefined}`}>{filter.name}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="row mt-5">
              {movies && movies.length ? movies.map(movie => (
                <Card key={movie._id} movie={movie} />
              )) : <p style={{color: "white"}}>Loading...</p>}
            </div>
        </div>
    </section>
  )
}

export default Schedule