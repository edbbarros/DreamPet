import React from 'react';

import Home from './pages/Home';
import Breeds from './pages/Find_Breeds'; 

import Navbar from './Components/Navbar';
import GlobalStyles from './styles/Global_style';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <GlobalStyles />
    <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/findbreeds" component={Breeds} />
      </Switch>
      </BrowserRouter>
  )
}

export default App;