import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentList from './pages/StudentList';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/students/new" element={<AddStudent />} />
          <Route path="/students/:id/edit" element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;