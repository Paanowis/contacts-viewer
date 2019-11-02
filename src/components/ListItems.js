import React from 'react';
import { Link } from 'react-router-dom';


function App() {
    return (
        <div className="list-item">
            <Link to="/" className="list-group-item active">All Contacts <span className="badge">11</span></Link>
            <Link to="#" className="list-group-item">Family <span className="badge">6</span></Link>
            <Link to="#" className="list-group-item">Friends <span className="badge">3</span></Link>
            <Link to="#" className="list-group-item">Others <span className="badge">2</span></Link>
        </div>
    )
}

export default App;