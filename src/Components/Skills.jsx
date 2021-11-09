import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Iconhtml from '../img/html_icon_130910.png';
import Iconcss from '../img/css3.png';
import Iconjs from '../img/js.png';
import Icontypejs from '../img/icons8-typescript-48.png';
import Iconreact from '../img/logo192.png';
import Iconwebpack from '../img/icons8-webpack-48.png';
import stylecss from '../styles/style.css';
import Iconpython from '../img/icons8-python-48.png';
import Iconnodejs from '../img/icons8-nodejs-48.png';
import Iconlinux from '../img/linux_icon.png';
import Iconphp from '../img/new-php-logo.png';
import Iconmysql from '../img/logo-mysql-170x115.png';



const Skills = () => {
    return(
        <div>
            <Tabs>
          <Tabs forceRenderTabPanel defaultIndex={1}>
            <TabList>
              <Tab>HTML5/CSS3</Tab><img src={ Iconhtml } className="iconhtml" alt="" /><img src={ Iconcss } className="iconcss" alt="" />
              <Tab>JavaScrit</Tab><img src={ Iconjs } className="iconjs" alt="" />
              <Tab>TypeScript</Tab><img src={ Icontypejs } className="icontypejs" alt="" />
              <Tab>React.js</Tab><img src={ Iconreact } className="iconreact" alt="" />
              <Tab>React Native</Tab><img src={ Iconreact } className="iconreactNative" alt="" />
              <Tab>WebPack</Tab><img src={ Iconwebpack } className="iconwebpack" alt="" />
            </TabList>
            <TabPanel>
            <p className="tabtext">Basic responsive and sass coding is fine. The editor uses visual studio code.</p>
              <p className="tabtext">85%</p>
              <progress className={ stylecss } value="85" max="100"></progress>
            </TabPanel>
            <TabPanel>
            <p className="tabtext">I can't write complex vanila code, but i'm confident in implementing libraries and frameworks.</p>
              <p className="tabtext"> I have also learned the basics of API operations and object-oriented programming.</p>
              <p className="tabtext">90%</p>
              <progress className={ stylecss } value="90" max="100"></progress>
            </TabPanel>
            <TabPanel>
            <p className="tabtext">it's still difficult to use in large projects, but I've learned basic type declarations.</p>
              <p className="tabtext">60%</p>
              <progress className={ stylecss } value="60" max="100"></progress>
            </TabPanel>
            <TabPanel>
            <p className="tabtext">You can write basic JSX notation code for both class components as well as function components.</p>
              <p className="tabtext">I understand the interaction between components and the mechanism of the life cycle.</p>
              <p className="tabtext">You can use implementations and frameworks(material-ui) in React modules.</p>
              <p className="tabtext">90%</p>
              <progress className={ stylecss } value="90" max="100"></progress>
            </TabPanel>
            <TabPanel>
            <p className="tabtext">I just learned recently and can only write basic code in the ios app.</p>
              <p className="tabtext">i'm currently learning.</p>
              <p className="tabtext">70%</p>
              <progress className={ stylecss } value="70" max="100"></progress>
            </TabPanel>
            <TabPanel>
            <p className="tabtext">I learned webpack to pursue React more deeply.</p>
              <p className="tabtext">I just learned webpack for my perssonal project, so I can only edit basic config files</p>
              <p className="tabtext">70%</p>
              <progress className={ stylecss } value="70" max="100"></progress>
            </TabPanel>
          </Tabs>
        </Tabs>

        <Tabs forceRenderTabPanel defaultIndex={1}>
            <TabList>
            <Tab className="clickskills">BACKEND SKILL</Tab>
              <Tab>Python</Tab><img src={ Iconpython } className="iconpython" alt="" />
              <Tab>node.js</Tab><img src={ Iconnodejs } className="iconnodejs" alt="" />
              <Tab>Linux</Tab><img src={ Iconlinux } className="iconlinux" alt="" />
              <Tab>PHP/MySQL</Tab><img src={ Iconphp } className="iconphp" alt="" /><img src={ Iconmysql } className="iconmysql" alt="" />
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel>
            <p className="tabtext">Originally I learned Python for smartphone app development.</p>
              <p className="tabtext">i'm learning Python on Windows and i'm still learning command prompt operations and basic grammar.</p>
              <p className="tabtext">70%</p>
              <progress className={ stylecss } value="70" max="100"></progress>
            </TabPanel>
            <TabPanel>
            <p className="tabtext">i'm using the platform to focus on basic module installation on the command line and now server-side learning.</p>
              <p className="tabtext">I understand the contents of the packge.json file to some extent, but not all.</p>
              <p className="tabtext">80%</p>
              <progress className={ stylecss } value="80" max="100"></progress>
            </TabPanel>
            <TabPanel>
            <p className="tabtext">I only have knowledge, but I plan to learn from now on!.</p>
              <p className="tabtext">50%</p>
              <progress className={ stylecss } value="50" max="100"></progress>
            </TabPanel>
            <TabPanel>
            <p className="tabtext">What I can do is local, but I learned how to create a database and receive basic data.</p>
              <p className="tabtext">70%</p>
              <progress className={ stylecss } value="60" max="100"></progress>
            </TabPanel>
        </Tabs>
        
        </div>
    )
}

export default Skills