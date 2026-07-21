import axios from "axios";

const API_URL = "http://localhost:8080/api/students";

export const getAllStudents = () => axios.get(API_URL);
export const getStudentById = (id) => axios.get(`${API_URL}/${id}`);
export const createStudent = (student) => axios.post(`${API_URL}`,student);
export const updateStudent = (id,student) => axios.put(`${API_URL}/${id}`,student);
export const deleteStudent = (id) => axios.delete(`${API_URL}/${id}`);
export const searchStudentByName = (name) => axios.get(`${API_URL}/search/name/${name}`);
export const searchStudentByCourse=(course) => axios.get(`${API_URL}/search/course/${course}`);
export const searchStudentByEmail = (email) => axios.get(`${API_URL}/search/email/${email}`);
export const searchStudentBtAge = (age) => axios.get(`${API_URL}/search/age/${age}`);