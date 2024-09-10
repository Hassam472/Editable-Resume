const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeContent = document.getElementById("resumeContent") as HTMLElement;

resumeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement).value;
  const school = (document.getElementById("school") as HTMLInputElement).value;
  const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
  const company = (document.getElementById("company") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  const resumeHTML = `
  <h1>Generated Resume</h1>
    <h2>Personal Information</h2>
    <p><strong>Full Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <br> <br>

    <h2>Education</h2>
    <p><strong>Degree:</strong> ${education} at ${school}</p>
    <br> <br>

    <h2>Work Experience</h2>
    <p><strong>Job Title:</strong> ${jobTitle}</p>
    <p><strong>Company:</strong> ${company}</p>
    <br> <br>

    <h2>Skills</h2>
    <p>${skills
      .split(",")
      .map((skill) => skill.trim())
      .join(", ")}</p>
    <br> <br>
    
    <button id="edit" type="edit">Edit Resume</button>
  `;

  resumeContent.innerHTML = resumeHTML;

  const edit = document.getElementById("edit") as HTMLButtonElement;
  const resume = document.getElementById("resume") as HTMLElement;

  if (resumeHTML) {
    resumeForm.style.display = "none";
  }

  edit.addEventListener("click", () => {
    resumeForm.style.display = "block";
    resume.style.display = "none";
  });

  if (resume) {
    resume.style.display = "block";
  }

});
