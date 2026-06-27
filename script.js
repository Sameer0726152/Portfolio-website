let hero_title = document.querySelector("#hero-title");
hero_title.innerText = "Hi, I'm Sameer Talekar";
hero_title.style.color = "#00d4ff";
hero_title.style.transform = "translateY(-10px)";
hero_title.style.transition = "1s";

let navlinks = document.querySelectorAll("nav a");
console.log(navlinks);

for (let link of navlinks)
{
    link.style.color = "#00d4ff";
    link.style.cursor = "pointer";
}

let cards = document.querySelectorAll(".project-card");
for (let card of cards)
{
    card.style.border = "2px solid cyan";
    card.style.transition = "1s";
}

let contact = document.querySelectorAll(".contact-item");
for (let item of contact)
{
    item.style.border = "2px solid #00d4ff";
}

console.log(hero_title);
console.log(navlinks);
console.log(cards);
console.log(contact);