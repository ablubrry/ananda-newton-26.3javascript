let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${thisYear} Ananda Newton`;
footer.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "GitHub"];

let skillsSection = document.querySelector("#Skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i <skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

let messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = event.target.userName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.userMessage.value;

    console.log(name, email, message);
    messageForm.reset();
});

let messageSection = document.querySelector("#messages");
let messageList = messageSection.querySelector("ul");

let newMessage = document.createElement("li");
newMessage.innerHTML = 
    `<a href="mailto: ${email}">${name}</skills.length;>
    <span>${message}</span>`;
messageList.appendChild(newMessage);

let removeButton = document.createElement("button");
removeButton.textContent = "remove";
removeButton.type = "button";

removeButton.addEventListener("click", function () {
    let entry = removeButton.parentNode;
    entry.removeChild();
});

newMessage.appendChild(removeButton);