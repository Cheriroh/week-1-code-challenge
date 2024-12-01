function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointThreshold = 12;

    if (speed < speedLimit) {
        return "Ok";
    } else {
        // Calculate the number of demerit points
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);

        let result = `Points: ${demeritPoints}`;;

        // Check if the license should be suspended
        if (demeritPoints > demeritPointThreshold) {
            result += "\nLicense suspended";
        }

        return result;
    }
}
console.log(checkSpeed(89))
console.log(checkSpeed(70))
console.log(checkSpeed(150))
console.log(checkSpeed(100))