function determineGrade() {
    // Prompt the user for input
    let input = prompt("Enter the student's marks (0-100):");
    
    // Convert input to a number
    let marks = Number(input);

    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid marks! Please enter a value between 0 and 100.");
        return;
    }

    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
    alert(`The student's grade is: ${grade}`);
}

// Call the function
determineGrade();