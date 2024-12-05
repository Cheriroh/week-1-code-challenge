
//Write a program that takes the speed of a car as input e.g 80. 
//If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70),
// it should give the driver one demerit point and print the total number of demerit points.

   //> For example, if the speed is 80, it should print: “Points: 2”. 
   //If the driver gets more than 12 points, the function should print: “License suspended”.

   function studentGrading(mark) {
    if (mark > 79 && mark <= 100) {
        return "A";
    } else if (mark >= 60 && mark <= 79) {
        return "B";
    } else if (mark >= 50 && mark <= 59) {
        return "C";
    } else if (mark >= 40 && mark <= 49) {
        return "D";
    } else if (mark >= 0 && mark < 40) {
        return "E";
    } else {
        return "Invalid input. Marks should be between 0 and 100.";
    }
}

// Prompt the user for input
let markInput = prompt("Input student marks (0 - 100):");

// Convert the input to a number
let mark = Number(markInput);

// Check if the input is a valid number and display the grade
if (isNaN(mark)) {
    alert("Invalid input. Please enter a number.");
} else {
    let grade = studentGrading(mark);
    alert(`The grade for marks ${mark} is: ${grade}`);
}
