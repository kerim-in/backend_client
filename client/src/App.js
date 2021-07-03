import React from 'react';
import { Navbar } from './components/Navbar';
import Client from './components/Client';

function App() {
  return (
      <div className="container-lg">
        <Navbar />
        <div>
          <Client />
        </div>
      </div>
  );
}

export default App;
