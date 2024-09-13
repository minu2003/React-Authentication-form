import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './Authcontext';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
