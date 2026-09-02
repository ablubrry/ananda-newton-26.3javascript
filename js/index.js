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
let messageSection = document.querySelector("#messages");
let messageList = messageSection.querySelector("ul");

messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;

    let newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${message}</span>`;
    
  
    let removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.type = "button";

    
    removeButton.addEventListener("click", function () {
        let entry = removeButton.parentNode;
        entry.remove();
    });

    
    newMessage.appendChild(removeButton);

    
    messageList.appendChild(newMessage);
    
    console.log(name, email, message);
    messageForm.reset();
});

