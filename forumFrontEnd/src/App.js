import './App.css';
import { useEffect, useState } from 'react';
import Student from './components/Student/Student';
import axios from 'axios';
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Button } from '@mui/material';
import { useNavigate, useLocation } from "react-router-dom";
import SimpleSnackbar from './components/Messaging/SimpleSnackbar';

function App() {
  const [students, setStudents] = useState(null)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteStudentId, setDeleteStudentId] = useState(-1);
  const [showSnackbar, setShowSnackbar] = useState(false);
  
  const navigate = useNavigate();
  const currentLocation = useLocation()
  const apiDomain = "http://localhost:8081/api/v1"

  const handleClickOpen = (event) => {
    if (event.target.value) {
      setOpenDeleteDialog(true);
      setDeleteStudentId(event.target.value);
    }
  };

  const handleClose = (event) => {
    setOpenDeleteDialog(false);
  };  

  useEffect(() => {
    if (currentLocation.state?.createdStudent) {
      setShowSnackbar(true)
    }
    if (!students) {
      fetch(apiDomain+'/students').then((response) => {
        return response.json();
      }).then((data) => {
        setStudents(data)
      })
    }
  })

  const deleteStudentHandler = (event) => {
    if (event.target.value === "1") {
      axios.delete(apiDomain+'/students/'+deleteStudentId).then(() => {
        window.location = '/';
      })
    }
  }

  const openAddStudentDialog = (event) => {
    navigate('/students/new')
  }

  return (
      <div className="main-container">
        <header><h2>Students CRUD</h2><hr></hr></header>
        <div>{students ?
        students
        .map((student) => {
          return <div key={student.id}>
            <Student name={student.name} 
              email={student.email} 
              dob={student.dob} 
              age={student.age}
              id={student.id}
              deleteStudentHandler={handleClickOpen}
            ></Student>
          </div>
        }) : "Loading data"}</div>
        <button className="add-student-btn" name="add-student" onClick={openAddStudentDialog}>Add student</button>
        <Dialog open={openDeleteDialog}
          onClose={handleClose}>
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete this user?"}
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              It would be a pitty to live without him...
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} value={0}>Disagree</Button>
            <Button onClick={deleteStudentHandler} value={1} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>

        {showSnackbar && <SimpleSnackbar message={currentLocation.state.snackbarMessage}/>}
      </div>
  );
}

export default App;
