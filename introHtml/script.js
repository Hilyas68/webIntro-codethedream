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

const messageForm = document.querySelector("#messageForm");
const statusEl = document.querySelector("#status");

function fakeRequest(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; 
            if (success) {
                resolve("Message sent successfully!");
            } else {
                reject("Failed to send message. Please try again.");
            }
        }, 2000);
});
}


messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    statusEl.textContent = "Sending message...";

   fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: document.querySelector("#nameInput").value,
        message: document.querySelector("#messageInput").value
    })
   }).then(response => response.json())
    .then(data => {
        console.log(data)
        statusEl.textContent = "Message Sent successfully";
        messageForm.reset();
    })
    .catch(error => {
        console.log(error)
        statusEl.textContent = "Net error, Try again"
    })
});