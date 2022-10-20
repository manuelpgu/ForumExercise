import axios from "axios"
import { TextField, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CreatePostForm = () => {
  const navigate = useNavigate();
  const apiDomain = "http://localhost:8080/api/v1";
  const [dob, setDob] = useState(new Date());
  const createPost = (event) => {
    event.preventDefault();
    const body = {
      "userName": event.target[0].value,
      "thread": event.target[1].value,
      "category": event.target[2].value,
      "postBody": event.target[3].value,
      "imageLink": event.target[4].value,
    }
    axios.post(apiDomain+'/posts', body).then((res) => {
      if (res.status === 200) {
        navigate('/', {
          state: {
            createdStudent: true,
            snackbarMessage: "Post created succesfully"
          }
        })
      }
    });
  }
  return <div className="update-form-wrapper">
    <h2>Add Posts</h2>
    <form onSubmit={createPost} className="update-form">
    <TextField id="standard-basic" name="userName" label="userName" variant="standard"/>

    <TextField id="standard-basic" name="thread" label="thread" variant="standard"/>

    <TextField id="standard-basic" name="category" label="category" variant="standard"/>

    <TextField id="standard-basic" name="postBody" label="postBody" variant="standard"/>

    <TextField id="standard-basic" name="imageLink" label="imageLink" variant="standard"/>
    
    <Button type="submit" variant="contained">Add Posts</Button>
  </form>
  </div>
}

export default CreatePostForm;