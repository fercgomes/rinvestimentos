import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import DueDilligencePage from './pages/due-dilligence';
import HomePage from './pages/home/home';
import PortfolioPage from './pages/portfolio';

function App() {
  return (
    <>
      <NavBar />
      <Route path="/" exact component={HomePage} />
      <Route path="/carteiras" exact component={PortfolioPage} />
      <Route path="/dds" exact component={DueDilligencePage} />
      <Route path="/calculadoras" exact component={HomePage} />
    </>
  );
}

export default App;
