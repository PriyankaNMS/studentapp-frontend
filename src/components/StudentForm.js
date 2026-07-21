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
            paddingTop: "40px",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px lightgrey"
        }}>
            <label htmlFor="name" >Name</label>
            <input name="name" placeholder="Your_name" value={form.name} onChange={handleChange} required style={{height:"35px",width:'400px',marginLeft:"15px",marginTop:"10px",paddingLeft:"5px",backgroundColor:"snow",boxShadow:"3px 3px 3px lightgrey", border:"0px"}}/><br/>

            <label htmlFor="email">Email</label>
            <input name="email" placeholder="mail@gmail.com" value={form.email} onChange={handleChange} required style={{height:"35px",width:'400px',marginLeft:"15px",marginTop:"10px",paddingLeft:"5px",backgroundColor:"snow", boxShadow:"3px 3px 3px lightgrey", border:"0px"}}/><br/>

            <label htmlFor="course">Course</label>
            <input name="course" placeholder="Eg.,IT" value={form.course} onChange={handleChange} required style={{height:"35px",width:'400px',margin:"10px",paddingLeft:"5px",backgroundColor:"snow", boxShadow:"3px 3px 3px lightgrey", border:"0px"}}/><br/>

            <label htmlFor="Age">Age</label>
            <input name="age" type="number" placeholder="Eg.,20" value={form.age} onChange={handleChange} required style={{height:"35px",width:'400px',marginLeft:"20px",marginTop:"10px",paddingLeft:"5px",backgroundColor:"snow",boxShadow:"3px 3px 3px lightgrey", border:"0px"}}/><br/>

            <button type="submit" style={{height:"40px", width:"140px", marginTop:"20px", backgroundColor:"powderblue", borderRadius:"20px",boxShadow:"5px 5px 3px lightgrey", border:"0px"}}>{submitLabel}</button>
        </form>
    );
}

export default StudentForm;