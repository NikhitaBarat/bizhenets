import React from 'react';
import { Hero, Helphero } from '../../components';
import './home.styles.css';

const Home = () => {
  return (
    <div className='home-page'>
      <div className="home-bg">
        <div className="spread-1"/>
        <div className="spread-2"/>
      </div>
      <Hero />
      <Helphero/>
    </div>
  )
}

export default Home