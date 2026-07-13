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
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input name="course" placeholder="Course" value={form.course} onChange={handleChange} required />
            <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
            <button type="submit">{submitLabel}</button>
        </form>
    );
}

export default StudentForm;