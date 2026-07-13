import React, { useState, useEffect } from 'react';

function StudentForm({ initialData, onSubmit, submitLabel }) {
    const [form, setForm] = useState({ name: '', email: '', course: '', age: '' });

    useEffect(() => {
        if (initialData) setForm(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit} style={{
            height: "360px",
            width: "70%",
            textAlign: "center",
            backgroundColor: "floralwhite",
            marginLeft: "15%",
            marginTop: "50px",
            paddingTop: "40px"
        }}>
            <label htmlFor="name" >Name</label>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required style={{height:"35px",width:'510px',margin:"10px",backgroundColor:"snow"}}/><br/>

            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{height:"35px",width:'510px',margin:"10px",backgroundColor:"snow"}}/><br/>

            <label htmlFor="course">Course</label>
            <input name="course" placeholder="Course" value={form.course} onChange={handleChange} required style={{height:"35px",width:'510px',margin:"10px",backgroundColor:"snow"}}/><br/>

            <label htmlFor="Age">Age</label>
            <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required style={{height:"35px",width:'510px',margin:"10px",backgroundColor:"snow"}}/><br/>

            <button type="submit" style={{height:"40px", width:"140px", marginTop:"20px", backgroundColor:"powderblue", borderRadius:"20px"}}>{submitLabel}</button>
        </form>
    );
}

export default StudentForm;