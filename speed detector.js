function speedChecker(speed) {
    const speedLimit = 70; // Speed limit
    const kmPerDemeritPoint = 5; // For every 5 km/s over the speed limit, 1 demerit point is given

    if (speed <= speedLimit) {
        return "Ok"; // If the speed is within the limit
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint); // Calculate demerit points
        if (points > 12) {
            return "License suspended"; // If points exceed 12, license is suspended
        } else {
            return `Points: ${points}`; // Otherwise, return the number of demerit points
        }
    }
}

// Function to prompt the user for speed entry
function promptForSpeed() {
    let speed;
    do {
        speed = prompt("Enter the speed of the car (e.g., 80):");
        speed = Number(speed); // Convert input to a number
    } while (isNaN(speed) || speed < 0); // Ensure valid input (non-negative number)
    return speed;
}

// Main execution
const speed = promptForSpeed(); // Get speed from the user
const result = speedChecker(speed); // Check the speed and calculate the result

// Display the result
console.log(`Speed: ${speed}`);
console.log(result);
alert(`Speed: ${speed}\n${result}`);
// i used jsfiddle to test the code functionality
