import React from 'react';

import './styles.scss';
import ProfilePic from './Components/headerPic';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePic/>
        <Skills/>
      </header>
    </div>
  );
}

export default App;
