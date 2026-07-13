import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllStudents, deleteStudent } from '../api/studentApi';

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const res = await getAllStudents();
        setStudents(res.data);
    };

    const handleDelete = async (id) => {
        await deleteStudent(id);
        fetchStudents();
    };

    return (
        <div>
            <h1>Student Management System</h1>
            <Link to="/students/new">
                <button>+ Add Student</button>
            </Link>

            <table border="1" cellPadding="8" style={{ marginTop: '20px', width: '100%' }}>
                <thead>
                <tr>
                    <th>ID</th><th>Name</th><th>Email</th><th>Course</th><th>Age</th><th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {students.map((s) => (
                    <tr key={s.id}>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                        <td>{s.course}</td>
                        <td>{s.age}</td>
                        <td>
                            <Link to={`/students/${s.id}/edit`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(s.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;