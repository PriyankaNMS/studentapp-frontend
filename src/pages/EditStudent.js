import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';
import { getStudentById, updateStudent } from '../api/studentApi';

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        fetchStudent();
    }, [id]);

    const fetchStudent = async () => {
        const res = await getStudentById(id);
        setStudent(res.data);
    };

    const handleUpdate = async (formData) => {
        await updateStudent(id, formData);
        alert("Student updated");
        navigate('/');
    };

    if (!student) return <p>Loading...</p>;

    return (
        <div>
            <h1 style={{textAlign:"center"}}>EDIT STUDENT</h1>
            <StudentForm initialData={student} onSubmit={handleUpdate} submitLabel="Update Student" />
        </div>
    );
}

export default EditStudent;