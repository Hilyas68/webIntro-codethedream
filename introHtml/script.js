console.log("DOM activated")

const nameEl = document.querySelector("#studentName")
const aboutEl = document.querySelector(".aboutText")

console.log("name Element" + nameEl)
console.log("about Element" + aboutEl)

console.log(document.querySelectorAll("h3"))

nameEl.textContent = "Jane Doe (DOM updated)"

aboutEl.innerHTML = "Hello! <strong> My name is Jane Doe.</strong> I am a computer science student with a passion for web development and programming."

const imgEl = document.querySelector("#profileImage");
imgEl.setAttribute("alt", "Profile picture");
// imgEl.removeAttribute("src")

const aBlankEl = document.querySelector("a[target='_blank']");
aBlankEl.textContent= "Visit MDN Official Documentation for more details"
console.log(aBlankEl)

const abouSession = document.querySelector(".about");
abouSession.classList.add("highlight");
