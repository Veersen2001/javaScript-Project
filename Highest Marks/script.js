// Define the marks array
let marks = [80, 95, 70, 85, 90];

// Initialize the highest marks to the first student's marks
let highest_marks = marks[0];

// Loop through the array to find the highest marks
for (let i = 1; i < marks.length; i++) {
  highest_marks = marks[i] > highest_marks ? marks[i] : highest_marks;
}

// Display the highest marks to the teacher
console.log("The highest marks in the class are: " + highest_marks);