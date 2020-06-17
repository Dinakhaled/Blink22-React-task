import React from 'react';
import Chat from './containers/Chat/Chat';
import SideMenu from './components/SideMenu/SideMenu';
import "./scss/base.scss";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Chat />
    </div>
  );
}

export default App;
