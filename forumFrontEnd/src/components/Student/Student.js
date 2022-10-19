import "./Student.css"
import { Link } from "react-router-dom"

const Student = (props) => {
  return <div className="student-container">
    <p name={props.name}>Name: {props.name}</p>
    <p>Email: {props.email}</p>
    <p>Date of birth: {props.dob}</p>
    <p>Age: {props.age}</p>
    <div className="btn-group">
      <Link className="crud-button edit-button" to={`/students/${props.id}`} value={props.id}><i className="fa-solid fa-pencil"></i></Link>
      <button className="crud-button delete-button" name="delete-student" onClick={props.deleteStudentHandler} value={props.id}><i className="fa-solid fa-trash"></i></button>
    </div>
  </div>
};

export default Student;

// 1 al 10, 
// 20-24
// 29-37 x2
// 1 ejercicio