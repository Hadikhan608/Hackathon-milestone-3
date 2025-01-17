

//get references of form and display area
const Form = document.getElementById("resumeForm") as HTMLFormElement;
const ResumeDisplayElement = document.getElementById("ResumeDisplay") as HTMLDivElement;

//handle form submission
Form.addEventListener ('submit', (event:Event) => {
    event.preventDefault(); //prevent page reloading

//collect input values
const name= (document.getElementById("name") as HTMLInputElement).value
const email= (document.getElementById("email") as HTMLInputElement).value
const phone= (document.getElementById("cell-number") as HTMLInputElement).value
const education= (document.getElementById("education") as HTMLTextAreaElement).value
const experience =(document.getElementById("experience") as HTMLTextAreaElement).value
const skills= (document.getElementById("skills") as HTMLTextAreaElement).value

//Generate reusme dynamically

const resumeHTML =`
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Cell phone:</b>${phone}</p>


<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
` ;

//display generated resume
if(ResumeDisplayElement){
    ResumeDisplayElement.innerHTML=resumeHTML;
} else{
    console.error('The resume display element is missing')
}

});