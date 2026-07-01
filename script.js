// ==========================================
// PORTFOLIO WEBSITE - SCRIPT.JS
// ==========================================

// ---------- DOM ELEMENTS ----------

const heroTitle = document.querySelector("#hero-title");
const heroRole = document.querySelector("#hero-role");
const resumeBtn = document.querySelector("#resume-btn");
const contactBtn = document.querySelector("#contact-btn");

const navLinks = document.querySelectorAll("nav a");
const projectCards = document.querySelectorAll(".project-card");
const contactItems = document.querySelectorAll(".contact-item");

const addProjectBtn = document.querySelector("#add-project");
const projectContainer = document.querySelector(".project-container");

// ---------- INITIAL PAGE STYLING ----------

heroTitle.innerText = "Hi, I'm Sameer Talekar";
heroTitle.style.color = "#00d4ff";
heroTitle.style.transition = "1s";

for (const link of navLinks)
{
    link.style.color = "#00d4ff";
    link.style.cursor = "pointer";
}

for (const card of projectCards)
{
    card.style.border = "2px solid cyan";
    card.style.transition = "1s";
}

for (const item of contactItems)
{
    item.style.border = "2px solid #00d4ff";
}

// ---------- HERO TITLE ----------

heroTitle.addEventListener("click", function ()
{
    heroTitle.innerText = "Welcome to my Portfolio";
    heroTitle.style.transform = "translateY(-10px)";
});

// ---------- HERO ROLE ----------

heroRole.addEventListener("click", function ()
{
    if (heroRole.innerText === "Frontend Developer")
    {
        heroRole.innerText = "Future Full Stack Developer";
    }
    else
    {
        heroRole.innerText = "Frontend Developer";
    }
});

// ---------- RESUME BUTTON ----------

resumeBtn.addEventListener("click", function (event)
{
    event.preventDefault();

    resumeBtn.innerText = "Downloading...";

    setTimeout(function ()
    {
        resumeBtn.innerText = "Download Resume";
    }, 2000);
});

// ---------- CONTACT BUTTON ----------

contactBtn.addEventListener("click", function ()
{
    contactBtn.innerText = "Opening Contact...";

    setTimeout(function ()
    {
        contactBtn.innerText = "Contact Me";
    }, 2000);
});

// ---------- KEYBOARD ----------

document.addEventListener("keydown", function (event)
{
    if (event.key === "d")
    {
        console.log("Dark Mode");
    }
});

// ---------- DOUBLE CLICK ----------

heroTitle.addEventListener("dblclick", function()
{
    heroTitle.classList.toggle("yellow-title");
});

// ---------- ADD PROJECT ----------

addProjectBtn.addEventListener("click", function ()
{
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.border = "2px solid cyan";
    card.style.transition = "1s";

    const image = document.createElement("img");
    image.src = "images/me.png";
    image.alt = "New Project";

    const content = document.createElement("div");
    content.className = "project-content";

    const heading = document.createElement("h3");
    heading.innerText = "New Project";

    const paragraph = document.createElement("p");
    paragraph.innerText = "This project was created dynamically.";

    const button = document.createElement("a");
    button.href = "#";
    button.innerText = "View Project";

    content.append(heading, paragraph, button);
    card.append(image, content);

    projectContainer.append(card);
});

// ---------- ADD SKILL ----------

const addSkillBtn = document.querySelector("#add-skill");
addSkillBtn.addEventListener("click", function()
{
    const skillsContainer = document.querySelector(".skills-container");
    const skill = document.createElement("div");
    skill.className = "skill-card";
    skill.innerText = "React";
    skillsContainer.append(skill);
});

// ---------- FORM ----------

const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", function(event)
{
    event.preventDefault();
    if(nameInput.value === "" || emailInput.value === "" || messageInput.value === "")
    {
        alert("Missing field detected");
    }
    else
    {
        alert("Form submitted successfully");
    }
});

// ---------- Yellow Border Project Card ----------

for(const card of projectCards)
{
    card.addEventListener("click", function()
    {
        card.classList.toggle("selected-project");
    });
}