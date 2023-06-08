let fullName = prompt("What is your full name?");
let age = prompt("What is your age?");
if (age < 15) {
  alert(`Sorry ${fullName}! You can't join the course`);
} else {
  alert(`Thanks ${fullName}! Welcome to the course`);
}
if (age < 15) {
  location.href = "../html/index.html";
}
