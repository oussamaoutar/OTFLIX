import React, { useState } from 'react';
import './playBtn.css';
import Modal from './Modal';

function PlayBtn({movie}) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  return (
    <>
      <div className={`trailer d-flex justify-content-center align-items-center ${movie.active ? 'active' : undefined} ${modal ? 'activeModal' : undefined}`}>
          <a href="#" className="playBtn" onClick={toggleModal}>
              <ion-icon name="play-outline"></ion-icon>
          </a>
          <p id="watch-trailer">Watch Trailer</p>
      </div>
      {movie.active && <Modal movie={movie} status={modal} toggleModal={toggleModal} />}
    </>
  )
}

export default PlayBtn