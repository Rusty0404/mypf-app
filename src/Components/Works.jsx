import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import App from '../App';
import Chatbot from '../img/chatbot.JPG';
import Chatbot02 from '../img/chatbot02.JPG';
import Chatbot03 from '../img/chatbot03.JPG';
import Slider from "react-slick";
import Bar from '../img/bar.JPG';
import Bar02 from '../img/bar02.JPG';
import Bar03 from '../img/bar03.JPG';
import Bar04 from '../img/bar04.JPG';
import Todo from '../img/todo.JPG';
import Todo02 from '../img/todo02.JPG';
import Todo03 from '../img/todo03.JPG';
import Todo04 from '../img/todo04.JPG';
import Mypf from '../img/mypf.JPG';
import Mypf02 from '../img/mypf02.JPG';
import Mypf03 from '../img/mypf03.JPG';
import Mypf04 from '../img/mypf04.JPG';




const Works = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      };

    return(
        <div>
            <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList>
                <Tab>Chat BOT App</Tab>
                <Tab>Bar&restaurant site</Tab>
                <Tab>ToDo List site</Tab>
                <Tab>Portfolio</Tab>
                </TabList>
                <TabPanel>
                    <div>
                    <Slider {...settings}>
          <div className="slider">
          <div className="meta">
        <p className="title">Chat BOT</p>
        <p className="desc">It is SPA construction of a induction type <br />chatbot web application.</p>
      </div>
            <img src={ Chatbot } alt="" />
            
         </div>
          <div>
          <div className="meta">
        <p className="title">TOOLS</p>
        <p className="title">HTML5/CSS3<br />
        JavaScript/TypeScript<br />
        React.js<br />
        FireBase</p>
      </div>
          <img src={ Chatbot02 } alt="" />
          </div>
          <div>
          <div className="meta">
      <p className="title">iPhone Browesr</p>
      </div>
          <img src={ Chatbot03 } alt="" />

          </div>
        </Slider>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <Slider {...settings}>
                    <div className="meta">
        <p className="title">Bar SPA Site</p>
        <p className="desc">Bar & Restaurant WEB site.<br />
        We have enabled a single page implementation using the react-router<br /> library.We focused on high-class design.</p>
        <img src={ Bar } alt="" />
                      </div>
                   
                      <div>
                      <div className="meta">
        <p className="title">TOOLS</p>
        <p className="desc">
        HTML5/CSS3<br />
        JavaScript<br />
        React.js/Material-UI<br />
        FireBase</p>
      </div>
                      <img src={ Bar02} alt="" />
                      </div>
                      <div>
                      <img src={ Bar03 } alt="" />
                      </div>
                      <div>
                      <img src={ Bar04 } alt="" />
                      </div>
                      </Slider>
                    </div>
                   
                </TabPanel>
                <TabPanel>
                  <div>
                  <Slider {...settings}>
                  <div className="meta">
        <p className="title">Todo List site</p>
        <p className="desc">This is the first site I created after learning programming. 
        It was hard to use localstorage so<br />
        that the list items wouldon't disappear when I closed the browser.</p>
        <img src={ Todo } alt="" />
      </div>
      <img src={ Todo } alt="" />
      
      

      <div>
      <div className="meta">
        <p className="title">TOOLS</p>
        <p className="desc">HTML5/CSS3<br />
        JavaScript/JQuery
       </p>
      </div>
      <img src={ Todo02 } alt="" />
      </div>
      <div>
      <img src={ Todo03 } alt="" />
      </div>
      <div>
      <img src={ Todo04 } alt="" />
      </div>
                    </Slider>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div>
                  <Slider {...settings}>
                  <div className="meta">
        <p className="title">Portfolio</p>
        <p className="desc">This site implements React tabs and<br /> separates them by item,
         Nesting tabs was hard.
        Language Translate introduced Google Translate.</p>
        <img src={ Mypf } alt="" />
      </div>
      <img src={ Mypf02 } alt="" />
      
      <div>
      <div className="meta">
      <p className="title">TOOLS</p>
        <p className="desc">HTML5/CSS3<br />
        JavaScript/React<br />
        firebase<br />
        React-Tabs/react-slick
       </p>
      </div>
      <img src={ Mypf03 } alt="" />
      </div>
                    </Slider>
                  </div>
                </TabPanel>
                
            </Tabs>
        </div>
    )
}

export default Works;