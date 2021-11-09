import React from 'react';
import MediaQuery from 'react-responsive';
import SNSSection from '../Components/Sns';
import stylecss from '../styles/style.css';
import mobile from '../styles/mobile.css';
import Footer from './footer';

const Home = () => {
    return(
        <div>
            <div className={ stylecss }>
            <SNSSection />
            <span>
               WEB DEVELOPER
            </span>
             <br />
            <span>
               KAZUYA,YAGISHITA
           </span>
            </div>
            <Footer />
       
           
           
            </div>
           
            
      
    )
}

export default Home;