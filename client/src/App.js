import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import Client from "./components/Client";
import { BrowserRouter, Route } from "react-router-dom";
import UpdateClientComment from "./components/admin/UpdateClientComment";
import { NavbarAdmin } from "./components/admin/NavbarAdmin";
import AddClient from "./components/admin/AddClient";
import Status from './components/admin/Status';
import Info from './components/Info';
import SearchLine from './components/SearchLine';

function App() {
  const [client, setClient] = useState("");

  return (
    <BrowserRouter>
      <div className="container-lg">
        <Route path="/" exact>
          <Navbar />
          <SearchLine setClient={setClient}/>
          <Client client={client} />
        </Route>
        <Route exact path="/clients">
          <Navbar />
          <Client />
        </Route>
        <Route exact path="/client">
          <NavbarAdmin />
        </Route>
        <Route exact path="/clients/:id/comments">
          <Navbar />
          <UpdateClientComment />
        </Route>
        <Route exact path="/adminka">
          <NavbarAdmin />
          <AddClient />
          <Client/>
        </Route>
        <Route path="/update">
          <AddClient/>
        </Route>
        <Route exact path="/status">
          <Navbar />
          <Status/>
        </Route>
        <Route path="/info">
          <Navbar />
          <Info/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
