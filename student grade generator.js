//Write a function that prompts the user to input student marks. 
//The input should be between 0 and 100.
//The output should correspond the correct grade, as shown below: 
//A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E - less 40

let mark = prompt("Input student marks (0 - 100)")
//const mark=()
 studentGrading(mark);
 
function studentGrading(mark){

if (mark>79 && mark<=100){
return "A";
} 
else if(mark>=60 && mark<=79){
return "B";
} 
else if(mark>=49 && mark<=59){
return "C";
} 
else if(mark>=40 && mark<=49){
return "D";
} 
else if(mark<=40){
return "E";
} 
else{
return "invalid"
}

} 



console.log(studentGrading(mark));

