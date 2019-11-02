import React from 'react';
import {Link} from 'react-router-dom';


function App() {
  return (
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <h3 className="navbar-brand text-uppercase">
                    My contacts
                </h3>
            </div>
            <Link to="/Form" className="navbar-right btn btn-default text-uppercase nav-btn">
              Add Contact
            </Link>
        </div>
    </nav>
  );
}

export default App;
