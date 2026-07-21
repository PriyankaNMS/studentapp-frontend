import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    getAllStudents,
    deleteStudent,
    searchStudentByName,
    searchStudentByCourse,
    searchStudentByEmail, searchStudentBtAge
} from '../api/studentApi';

function StudentList() {
    const [students, setStudents] = useState([]);
    const [searchField,setSearchField] = useState("name");
    const [searchTerm,setSearchTerm] = useState("");

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const res = await getAllStudents();
        setStudents(res.data);
    };

    const handleDelete = async (id) => {
        await deleteStudent(id);
        alert("Student deleted");
        fetchStudents();
    };

    const handleSearch = async () => {
        if(searchTerm.trim() === ""){
            fetchStudents();
            return;
        }
        try{
            let res;
            switch(searchField){
                case "name":
                    res = await searchStudentByName(searchTerm);
                    break;
                case "course":
                    res= await searchStudentByCourse(searchTerm);
                    break;
                case "email":
                    res = await searchStudentByEmail(searchTerm);
                    break;
                case "age":
                    res= await searchStudentBtAge(searchTerm);
                    break;
                default:
                    return;
            }
            setStudents(res.data);
        }
        catch(error){
            console.log("Search failed: ",error);
            setStudents([]);
        }
    }

    return (
        <div>
            <h1 style={{textAlign:"center"}}>STUDENT MANAGEMENT SYSTEM</h1>
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <Link to="/students/new">
                <button style={{
                    height:"30px",
                    width:"300px",
                    backgroundColor:"bisque",
                    marginLeft:"8px",
                    borderRadius:"30px",
                    border:"0px",
                    boxShadow:"5px 5px 3px lightgrey"}}>+ Add Student</button>
            </Link>

            <div style={{display:"flex",marginRight:"8px",height:"30px",boxShadow:"5px 5px 3px lightgrey"}}>
                <select value={searchField}
                        onChange = {(e)=> setSearchField(e.target.value)}
                        style={{backgroundColor:"snow", border:"0px", padding:"6px"}}
                >
                    <option value = "name">Name</option>
                    <option value = "course">Course</option>
                    <option value = "email">Email</option>
                    <option value = "age">Age</option>
                </select>
                <input type = "text"
                       value={searchTerm}
                       placeholder="search by field"
                       onChange={(e)=>setSearchTerm(e.target.value)}
                       onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                       style={{backgroundColor:"white", border:"0px"}}
                />
                <button onClick={handleSearch} >Search</button>
            </div>
            </div>
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
                                <button style={{backgroundColor:"lightyellow", borderRadius:"5px", marginRight:"30px", boxShadow:"2px 2px 3px lightgrey", border:"0px"}}>Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(s.id)} style={{backgroundColor:"aliceblue", borderRadius:"5px", boxShadow:"2px 2px 3px lightgrey", border:"0px"}}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;