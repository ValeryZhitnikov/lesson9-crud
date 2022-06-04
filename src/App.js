import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import NewPost from './components/pages/NewPost/NewPost';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/posts/new' element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App;
