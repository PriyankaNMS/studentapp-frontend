import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';
import { createStudent } from '../api/studentApi';

function AddStudent() {
    const navigate = useNavigate();

    const handleAdd = async (formData) => {
        await createStudent(formData);
        navigate('/');
    };

    return (
        <div>
            <h1>Add Student</h1>
            <StudentForm onSubmit={handleAdd} submitLabel="Add Student" />
        </div>
    );
}

export default AddStudent;