import React from 'react';

import Home from './pages/Home';
import Breeds from './pages/Find_Breeds'; 
import SubBreeds from './pages/Find_SubBreeds';
import Gallery from './pages/gallery';

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
      <Route path="/subfindbreeds" component={SubBreeds} />
      <Route path="/galeria" component={Gallery} />

      </Switch>
      </BrowserRouter>
  )
}

export default App;