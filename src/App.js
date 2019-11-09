import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './components/Form';
import ContactsProvider from './components/Contacts';


function App() {

  return (
    <BrowserRouter>
      <ContactsProvider>
        <div className="App">
          <Route exact path='/form' component={Form} />
        </div>
      </ContactsProvider>
    </BrowserRouter>
  );
}

export default App;
