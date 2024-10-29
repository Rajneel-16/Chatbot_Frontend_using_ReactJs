import React from 'react';
// import "./App.css";

import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import ContextProvider from './Context/Context';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;