import React, { useEffect } from 'react';
import './trend.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import TrendCard from '../components/TrendCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/movieDataSlice';

function Trend() {
    const dispatch = useDispatch();
    const movieData = useSelector((state) => state.movieData);

    useEffect(() => {
        dispatch(fetchData("http://localhost:3000/data/movieData.json"));
    }, [dispatch]);

    return (
        <section className="trend" id="trend">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title" id="trending">
                        Trending
                    </h4>
                </div>
                <div className="row">
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 6,
                                spaceBetween: 30,
                            },
                        }}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className='trendSwiper'
                    >
                        {movieData.loading ? (
                            <p style={{ color: "white" }}>Loading...</p>
                        ) : (
                            movieData.data && movieData.data.length > 0 ? (
                                movieData.data.map(movie => (
                                    <SwiperSlide key={movie._id}>
                                        <TrendCard slide={movie} />
                                    </SwiperSlide>
                                ))
                            ) : (
                                <p style={{ color: "white" }}>No data available</p>
                            )
                        )}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Trend;
