import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import "./EditStudentForm.css";
import axios from "axios";

const EditStudentForm = () => {
  const [student, setStudent] = useState(null)

  useEffect(() => {
    const id = window.location.pathname[window.location.pathname.length-1]
    if (!student) {
      fetch('http://localhost:8081/api/v1/students/'+id).then((response) => {
        return response.json();
      }).then((data) => {
        setStudent(data)
      })
    }
  })

  const updateStudent = async (event) => {
    event.preventDefault();
    const body = {
      "id": window.location.pathname[window.location.pathname.length-1],
      "name": event.target[0].value,
      "email": event.target[1].value,
      "dob": event.target[2].value,
      "age": event.target[3].value
    }
    const result = await axios.put('http://localhost:8081/api/v1/students/'+student.id, body)
  
    if (result.status === 200) {
      window.location = '/';
    }
  }

  return student ? <div className="update-form-wrapper">
    <h2>Update student</h2>
    <form onSubmit={updateStudent} className="update-form">
    <TextField id="standard-basic" label="Name" variant="standard" defaultValue={student.name}/>
    <TextField id="standard-basic" label="Email" variant="standard" defaultValue={student.email}/>
    <TextField id="standard-basic" label="Date of birth" variant="standard" defaultValue={student.dob}/>
    <TextField id="standard-basic" label="Age" variant="standard" defaultValue={student.age} disabled/>
    <Button type="submit" variant="contained">Update student</Button>
  </form>
  </div> : "Loading data"
};

export default EditStudentForm;