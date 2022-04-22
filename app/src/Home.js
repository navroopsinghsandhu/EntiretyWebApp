import React from 'react';
import './App.css';
import Footer from './Footer';

function Home() {
  return (

    <div>
        <section className="firstsection">
            <div className="box-main">
                <div className="firstHalf">
                    <h1 className="text-big" id="web">Our Products</h1>
                    <p className="text-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
    
    
                </div>
            </div>
        </section>
    
        <section className="secondsection">
            <div className="box-main">
                <div className="firstHalf">
                    <h1 className="text-big" id="program">
                        Offers and Discounts
                    </h1>
                    <p className="text-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
    
    
                </div>
            </div>
        </section>

        <Footer /> 
    </div>

  );
}

export default Home;