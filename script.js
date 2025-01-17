//get references of form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("Resume display");
//handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reloading
    //collect input values
    var yourName = document.getElementById("name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("Cell number").value;
    var education = document.getElementById("Education").value;
    var experience = document.getElementById("Work Experience").value;
    var skills = document.getElementById("Skills").value;
    //Generate reusme dynamically
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(yourName, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Cell phone:</b>").concat(phone, "</p>\n\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    //display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
