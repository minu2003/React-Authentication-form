import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './Authcontext';
import Login from './Login';
import Register from './Register';
import ToDoList from './ToDo/ToDoList';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to='/login' />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/todolist' element={<PrivateRoute><ToDoList/></PrivateRoute>}/>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;