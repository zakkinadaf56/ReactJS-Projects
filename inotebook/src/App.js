import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <>
    <NoteState>
    <Router>
      <Navbar/>
      <Alert message="iNoteBook is in progress m33"/>
      <div className="container">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/SignUp' element={<SignUp/>}/>
      </Routes>
      </div>
    </Router>
    </NoteState>
      
    </>
  );
}

export default App;
