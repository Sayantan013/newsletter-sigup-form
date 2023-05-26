const form = document.querySelector("#newsletter-form");
const signup = document.querySelector("#signup");
const success = document.querySelector("#success");
const dismiss = document.querySelector("#dismiss");

const updateSuccessMessage = (email) => {
    const success = document.querySelector("#success-email");
    success.textContent = `${email.value}`;
}


const switchSections = () => {
    signup.classList.toggle("hidden");
    success.classList.toggle("hidden");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("#email");
    switchSections();
    updateSuccessMessage(email);
})

dismiss.addEventListener('click', () => {
    switchSections();
})