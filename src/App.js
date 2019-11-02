import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './components/Form';
import Contacts from './components/Contacts';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Contacts} />
        <Route exact path='/form' component={Form} />
      </div>
    </BrowserRouter>
  );
}

export default App;
