import React from 'react';

import './styles.scss';
import ProfilePic from './Components/headerPic';
import Skills from './Components/Skills';
import Projects from './Components/Projects'

function App() {
  return (
    <div className="App">
      <ProfilePic/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
