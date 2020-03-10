import React, { useState } from 'react';
import './App.css';
import Tabs from './components/tabs';
import Content from './components/content';


function App() {

  const [setIndex, setIndexState] = useState(0)

  const changeValue = (textIndex) => {
    setIndexState(textIndex)
  }

  const textArray = [
    "This is tab 1.", "Thius is tab 2.", "This is tab 3."
  ]

  return (
    <div className="App">
      <Tabs changeValue={() => changeValue(0)} tabLabel="Tab 1" />
      <Tabs changeValue={() => changeValue(1)} tabLabel="Tab 2" />
      <Tabs changeValue={() => changeValue(2)} tabLabel="Tab 3" />
      <p><Content displayText={textArray[setIndex]} /></p>
    </div>
  );
}

export default App;