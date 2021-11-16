import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import About  from './Components/about';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Contact from './Components/Contact';
import Language from './Components/Language';
import Home from './Components/Home';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  
  render() {
    
    return(
      <div>
        <div className="background-container">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="" />
<div className="stars"></div>
<div className="twinkling"></div>
<div className="clouds"></div>
</div>
        <Tabs forceRenderTabPanel defaultIndex={1} >
            <TabList>
            
                <Tab>HOME</Tab>
                <Tab>ABOUT</Tab>
                <Tab>SKILLS</Tab>
                <Tab>WORKS</Tab>
                <Tab>CONTACT</Tab>
                <Tab>LanguageSetting</Tab>
            </TabList>

            <TabPanel>
            <Tabs forceRenderTabPanel>
           <Home />
            </Tabs>
            </TabPanel>
            <TabPanel>
            <Tabs forceRenderTabPanel>
            <About />
            </Tabs>
            </TabPanel>

            <TabPanel>
            <Tabs forceRenderTabPanel>
           <Skills />
            </Tabs>
            </TabPanel>

            <TabPanel>
            <Tabs forceRenderTabPanel>
           <Works />
            </Tabs>
            </TabPanel>

            <TabPanel>
            <Tabs forceRenderTabPanel>
           <Contact />
            </Tabs>
            </TabPanel>

            <TabPanel>
            <Tabs forceRenderTabPanel>
           <Language />
            </Tabs>
            </TabPanel>

        </Tabs>
      </div>
      
    )
  }
}


export default App;
