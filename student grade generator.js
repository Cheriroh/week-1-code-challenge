function calculateGrade() {
    // Get user input for student marks
const marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));

  // Check if the input is within the valid range
  if (isNaN(marks) || marks < 0 || marks > 100) {
    return "Invalid input. Marks should be between 0 and 100.";
}

  // Determine the grade 
  if (marks > 79) {
    return "Grade: A";
} else if (marks >= 60 && marks <= 79) {
    return "Grade: B";
} else if (marks >= 50 && marks <= 59) {
    return "Grade: C";
} else if (marks >= 40 && marks <= 49) {
    return "Grade: D";
} else {
    return "Grade: E";
}

}

const testMarks = 75
console.log(calculateGrade(testMarks));

// console.log(calculateGrade());
//i used jsfiddle to test the functionality of the code 
