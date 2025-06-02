import './App.css'
import Landing from './pages/Landing'
import Login from './pages/Login.jsx';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
