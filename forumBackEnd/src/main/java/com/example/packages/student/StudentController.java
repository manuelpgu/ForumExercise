package com.example.packages.student;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="api/v1/students")
public class StudentController {
	private final StudentService studentService;

	@Autowired
	public StudentController(StudentService studentService) {
		this.studentService = studentService;
	}

	@GetMapping
	public List<Student> getStudents() {
		return studentService.getStudents();
	}

	@GetMapping(path="{studentId}")
	public Student getStudent(@PathVariable("studentId") Long id) { return studentService.getStudent(id); }

	@PostMapping
	public void registerNewStudent(@RequestBody Student student) {
		studentService.addNewStudent(student);
	}

	@DeleteMapping(path="{studentId}")
	public void deleteStudent(@PathVariable("studentId") Long id) {
		studentService.deleteStudent(id);
	}

	@PatchMapping(path="{studentId}")
	public void patchStudent(@PathVariable("studentId") Long id,
							  @RequestParam(required = false) String name,
							  @RequestParam(required = false) String email) {
		studentService.patchStudent(id, name, email);
	}

	@PutMapping(path="{studentId}")
	public void updateStudent(@PathVariable("studentId") Long id, @RequestBody Student student) {
		System.out.println(student);

		studentService.updateStudent(id, student);
	}
}
