/*Create a script that creates a bunch of student records. (create a data structure using an array, named students. The array will hold a list of objects. Each object will represent a student. Each object should contain name, track, achaivements (numeric value), and points (also numeric). Create at least 5 student objects.) Print those records to a webpage.
*/

var html = "";
var student = "";
var name = "";
var track = "";
var achievements = "";
var points = "";
var message = "";

var students = [
{
 	name: "Cat Perry",
 	track: "Full-stack JavaScript",
 	achievements: 450,
 	points: 1000010

 }, 
 {
 	name: "Jeremy Bunsen",
 	track: "iOS",
 	achievements: 224,
 	points: 55407

 },
 {
 	name: "Asha Inforial",
 	track: "Web Development",
 	achievements: 93,
 	points: 178

 },
 {
 	name: "Connor McGregor",
 	track: "Ruby on Rails",
 	achievements: 399672,
 	points: 1950842

 },
 {
 	name: "Ella Manlove",
 	track: "Full-stack JavaScript",
 	achievements: 15,
 	points: 122

 },
 {
 	name: "Urlo Mancini",
 	track: "Software Development",
 	achievements: 751849,
 	points: 429006

 }
];

function print(message) {
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = message;
}

for (var prop in students) { 
	console.log(prop, ":", students[prop]);
}

for (var i = 0; i < students.length; i += 1) {
			student = students[i];
			message += "<h2>Student: " + student.name + "</h2>";
			message += "<p>Track: " + student.track + "</p>";
			message += "<p>Achievements: " + student.achievements + "</p>";
			message += "<p>Points: " + student.points + "</p>";
}

print(message);
