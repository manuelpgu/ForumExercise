import axios from "axios"
import { TextField, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CreateStudentForm = () => {
  const navigate = useNavigate();
  const apiDomain = "http://localhost:8081/api/v1";
  const [dob, setDob] = useState(new Date());
  const createStudent = (event) => {
    event.preventDefault();
    const body = {
      "name": event.target[0].value,
      "email": event.target[1].value,
      "dob": event.target[2].value,
      "age": event.target[3].value
    }
    axios.post(apiDomain+'/students', body).then((res) => {
      if (res.status === 200) {
        navigate('/', {
          state: {
            createdStudent: true,
            snackbarMessage: "Student created succesfully"
          }
        })
      }
    });
  }
  return <div className="update-form-wrapper">
    <h2>Add student</h2>
    <form onSubmit={createStudent} className="update-form">
    <TextField id="standard-basic" name="name" label="Name" variant="standard"/>
    <TextField id="standard-basic" name="email" label="Email" variant="standard"/>
    <LocalizationProvider name="dob" dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date of birth"
        value={dob}
        onChange={(newValue) => {
          setDob(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    <TextField id="standard-basic" label="Age" variant="standard" disabled/>
    <Button type="submit" variant="contained">Add student</Button>
  </form>
  </div>
}

export default CreateStudentForm;