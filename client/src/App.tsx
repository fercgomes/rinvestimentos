import React from 'react';
import { ChakraProvider, Heading } from '@chakra-ui/react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import PortfolioPage from './pages/portfolio';

function App() {
  return (
    <>
      <Route path="/" exact component={PortfolioPage} />
    </>
  );
}

export default App;
