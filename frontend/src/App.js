import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
