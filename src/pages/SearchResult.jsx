import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './films.css'

function SearchResult() {
    const { title } = useParams();
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

    const film = films.find((f) => f.title.toUpperCase() === title.toUpperCase());

    if(loading) {
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

    if(!film) {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row">
                    <h4 className="section-title" style={{textTransform: "capitalize"}}>Search for "{title}"</h4>
                    </div>
                    <div className="row my-5 text-white" style={{height: '250px'}}>
                        No results.
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title" id="title-search" style={{textTransform: "capitalize"}}>Search for "{film.title}"</h4>
                </div>
                <div className="row my-5">
                    <div className="col-lg-3 col-md-5 col-12 text-center">
                        <Link to={`/films/${film._id}`}><img style={{maxHeight: '350px', maxWidth: '350px'}} src={film.previewImg} alt='image film' /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchResult;
