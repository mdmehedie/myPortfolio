
import { Route } from 'react-router-dom';
import BookStrore from './BookStore';
import './mainComponent.css'

function App() {
  return (
    <div>
      <div className="mainBody">
        <div className="nav-bar">
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/new-book">New Book</a></li>
              </ul>
        </div>
      </div>

        <Route path="/" exact component={BookStrore} />
        <Route path="/new-book" exact render={()=> <h2>New Book</h2>} />
    </div>
  );
}

export default App;