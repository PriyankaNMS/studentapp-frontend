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
            <h1 style={{textAlign:"center"}}>STUDENT MANAGEMENT SYSTEM</h1>
            <Link to="/students/new">
                <button style={{height:"30px",width:"300px",backgroundColor:"bisque",marginLeft:"8px",borderRadius:"30px"}}>+ Add Student</button>
            </Link>

            <table border="1" cellPadding="8" style={{ marginTop: '20px', width: '100%' }}>
                <thead style={{backgroundColor:"lavender"}}>
                <tr>
                    <th>ID</th><th>Name</th><th>Email</th><th>Course</th><th>Age</th><th>Actions</th>
                </tr>
                </thead>
                <tbody style={{backgroundColor:"lavenderblush"}}>
                {students.map((s) => (
                    <tr key={s.id}>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                        <td>{s.course}</td>
                        <td>{s.age}</td>
                        <td>
                            <Link to={`/students/${s.id}/edit`}>
                                <button style={{backgroundColor:"lightyellow", borderRadius:"5px", marginRight:"10px"}}>Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(s.id)} style={{backgroundColor:"aliceblue", borderRadius:"5px"}}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;