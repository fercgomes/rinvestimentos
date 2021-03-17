import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import DueDilligencePage from './pages/due-dilligence';
import DueDilligenceDetail from './pages/due-dilligence/detail/detail';
import HomePage from './pages/home/home';
import PortfolioPage from './pages/portfolio';

function App() {
  return (
    <>
      <NavBar />
      <Route path="/" exact component={HomePage} />
      <Route path="/carteiras" component={PortfolioPage} />
      <Route path="/calculadoras" component={HomePage} />
      {/* <Route path="/dds/:id" component={HomePage} /> */}
      <Route path="/dds" exact component={DueDilligencePage} />
      <Route path="/dds/read" exact component={DueDilligenceDetail} />
    </>
  );
}

export default App;
