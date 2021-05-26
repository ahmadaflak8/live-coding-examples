import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { useLocation, useHistory, useParams } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <aside>
            <Link to="/project">Project</Link>
            <span> | </span>
            <Link to="/project/1">Project 1</Link>
            <span> | </span>
            <Link to="/category/1">Category 1</Link>
            <span> | </span>
            <Link to="/category/1/2">Category 1/2</Link>
          </aside>
          <main>
            <Route path="/project/:id">
              <SingleProject />
            </Route>
            <Route path="/category/:id/:subid?">
              <Category />
            </Route>
          </main>
        </div>
      </Router>
    </div>
  );
}

function SingleProject() {
  const location = useLocation();
  const { id } = useParams();
  return (
    <div>
      <h2>SingleProject</h2>
      location.pathname: {location.pathname}
      <br />
      id: {id}
    </div>
  );
}

function Category() {
  const location = useLocation();
  const { id, subid } = useParams();
  return (
    <div>
      <h2>Category</h2>
      id/subid: {id}
      <br />
      subid: {subid ? subid : "undefined"}
    </div>
  );
}

export default App;
