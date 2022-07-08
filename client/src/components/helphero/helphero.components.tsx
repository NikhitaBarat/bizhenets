import React from 'react'
import { Homeless, UKRBRUSH } from '../../assets';
import './helphero.styles.css';

const Helphero = () => {
  return (
    <div className='help-card'>
        <div className="help-card-container">
            <div className="helphero-left">
                <img className='ukr-home-brsh' src={UKRBRUSH} alt="" />
                <div className='left-content-help'>
                    <h1 className='help-content'>Home</h1>
                    <p className='help-content'>for</p>
                    <h1 className='help-content'>Ukraine</h1>
                </div>
            </div>
            <div className="help-hero-right">
                <img className='homeless-img' src={Homeless} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Helphero