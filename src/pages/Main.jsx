import React from 'react';
import './main.css';
import Schedule from './Schedule';
import Trend from './Trend';
import Banner from './Banner';

function Main() {
  return (
    <main id="main">
        <Banner />
        <Trend />
        <Schedule />
    </main>
  )
}

export default Main