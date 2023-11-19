import React from 'react'
import { Link } from '../../assets';
import './footer.css'

const Footer = () => {
  return (
      <React.Fragment>
      <footer className ="foot">
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-3">
                    <img src= {Link} alt="image" className='mb-3' />
                    <p>Trafalgar provides progressive, and affordable 
                        healthcare, accessible on mobile and online 
                        for everyone
                    </p>
                    <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-1"></div>
                <div className="col-sm-12 col-md-12 col-lg-2">
                    <h5>Company</h5>
                    <p>About</p>
                    <p>Testimonials</p>
                    <p>Find a doctor</p>
                    <p>Apps</p>


                </div>
                <div className="col-sm-12 col-md-12 col-lg-1"></div>
                <div className="col-sm-12 col-md-12 col-lg-2">
                    <h5>Region</h5>
                    <p>Indonesia</p>
                    <p>Singapore</p>
                    <p>Hongkong</p>
                    <p>Canada</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-1"></div>
                <div className="col-sm-12 col-md-12 col-lg-2">
                    <h5>Help</h5>
                    <p>Help center</p>
                    <p>Contact support</p>
                    <p>Instruction</p>
                    <p>How it works</p>
                </div>
            </div>

        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>    
      </footer>
    </React.Fragment>
  );
}

export default Footer



