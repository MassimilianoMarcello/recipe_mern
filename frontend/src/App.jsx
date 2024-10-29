import { Routes, Route } from 'react-router-dom';


import './App.css';

import Header from './components/Header';
import Navbar from './components/NavBar';
import Books from './components/Books';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import AddBook from './components/AddBook';

const App = () => {
    return (
        <div>
        <Header title="Book store" />
        <Navbar />
        <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/add" element={<AddBook />} />
        </Routes>
    </div>
    );
};

export default App;
