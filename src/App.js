import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './routes/dashboard/AddStudent';
import AddTeacher from './routes/dashboard/AddTeacher';
import Dashboard from './routes/dashboard/Dashboard';
import Todo from './routes/dashboard/Todo';
import ViewStudent from './routes/dashboard/ViewStudent';
import ViewTeacher from './routes/dashboard/ViewTeacher';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';

function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<AddStudent />} />
          <Route path='viewStudent' element={<ViewStudent />} />
          <Route path='addTeacher' element={<AddTeacher />} />
          <Route path='viewTeacher' element={<ViewTeacher />} />
          <Route path='todo' element={<Todo />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
