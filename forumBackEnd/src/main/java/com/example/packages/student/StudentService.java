package com.example.packages.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class StudentService {

	private final StudentRepository studentRepository;

	@Autowired
	public StudentService(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
	}

	public List<Student> getStudents() {
		return studentRepository.findAll();
	}

	public void addNewStudent(Student student) {
		Optional<Student> studentByEmail = studentRepository.findStudentByEmail(student.getEmail());
		if (studentByEmail.isPresent()) {
			throw new IllegalStateException("Email taken");
		}
		studentRepository.save(student);
	}

	public Student getStudent(Long id) {
		Student student = studentRepository.findById(id)
				.orElseThrow(() -> new IllegalStateException("Student with id " + id + "not found"));

		return student;
	}

	public void deleteStudent(Long id) {
		Boolean studentExists = studentRepository.existsById(id);
		if (!studentExists) {
			throw new IllegalStateException("Student with id "+ id +" does not exist");
		}

		studentRepository.deleteById(id);
	}

	@Transactional
	public void patchStudent(Long id, String name, String email) {
		Student student = studentRepository.findById(id)
				.orElseThrow(() -> new IllegalStateException("Student with id " + id + "not found"));

		if (name != null && name.length() > 0 && !Objects.equals(student.getName(), name)) {
			student.setName(name);
		}
		if (email != null && email.length() > 0 && !Objects.equals(student.getName(), email)) {
			student.setEmail(email);
		}
	}

	public void updateStudent(Long id, Student newStudent) {
		studentRepository.findById(id)
				.orElseThrow(() -> new IllegalStateException("Student with id " + id + "not found"));
		studentRepository.save(newStudent);
	}
}
