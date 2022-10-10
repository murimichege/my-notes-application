import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import NotePage from './Components/NotesPage'
import './App.css';
import Header from './Components/Header'
import NotesApp from "./Components/NotesApp";

function App() {
  return (
    <div className="container dark">
      <div className="app">
    <Header />
    <Router>
    <Routes>
     <Route path="/" element ={ <NotesApp/> } />
     <Route path="/note/:id" element ={ <NotePage/> } />

    </Routes>
    </Router>
    </div>
    </div>
  );
}

export default App;
