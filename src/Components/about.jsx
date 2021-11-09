import React from 'react';
import kazuya from '../img/IMG_7477.jpg'

const About = () => {
    return(
        <div>
            <p className="tabtext">Hi, i'm a web developer & designer based in Japan. I specialize in front-end development but</p>
              <p className="tabtext">I also love to challenge the back end</p>
              <p className="tabtext">I've been self-taught in programming for 3 years and</p> 
              <p className="tabtext">I love hearing abuout new projects, and if you are interested in working with me,</p>
              <p className="tabtext">forward to hearing from you.</p>
              <img src={ kazuya } className="imgkazu" />
        </div>
    )
}

export default About;