import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { JumbotronContainer } from './containers/Jumbotron';
import {FooterContainer} from './containers/Footer'
import { FaqsContainer } from './containers/faqs';

function App() {
  return (
<>
    <JumbotronContainer/>
    <FaqsContainer/>
    <FooterContainer/>
</>
  );
}

export default App;
