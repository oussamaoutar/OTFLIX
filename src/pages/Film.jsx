import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './films.css'

function Film() {
    const { idFilm } = useParams();
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
        const res = await axios.get("http://localhost:3000/data/movieData.json");
        setFilms(res.data);
        setLoading(false);
        } catch (err) {
        console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const film = films.find((f) => f._id === parseInt(idFilm));

    if (loading) {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row my-5 text-white" style={{height: '250px'}}>
                        Loading...
                    </div>
                </div>
            </section>
        );
    }

    if (!film) {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row my-5 text-white" style={{height: '250px'}}>
                        Film not found.
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id='film-section'>
            <div className="container-fluid">
                <div className="row">
                <h4 className="section-title">{film.title}</h4>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-5 col-12 text-center">
                        <img style={{maxHeight: '350px', maxWidth: '350px'}} src={film.previewImg} alt='image film' />
                    </div>
                    <div className="col-lg-6 col-md-5 col-12">
                        <p className='text-white'>Coming on {film.date}</p>
                        <p className='text-white'>{film.year} | {film.ageLimit} | {film.category} | {film.length}</p>
                        <p className='text-white'>{film.description}</p>
                    </div>
                    <div className="col-lg-3 col-md-2 col-12">
                    <iframe src={film.video} frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Film;
