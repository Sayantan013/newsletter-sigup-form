const form = document.querySelector("#newsletter-form");
const signup = document.querySelector("#signup");
const success = document.querySelector("#success");
const dismiss = document.querySelector("#dismiss");
const error = document.querySelector("#error-message");
const input = document.querySelector("#email");

const updateSuccessMessage = (email) => {
    const success = document.querySelector("#success-email");
    success.textContent = `${email.value}`;
}


const switchSections = () => {
    signup.classList.toggle("hidden");
    success.classList.toggle("hidden");
    input.classList.remove("error");
    error.classList.add("hidden");
}

const isValidEntry = (email) => {
    const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-])*$/
    return reg.test(email);
}

const displayErrors = () => {
    error.classList.remove("hidden");
    input.classList.add("error");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("#email");
    const valid = isValidEntry(email.value);
    console.log(valid);
    if(valid){
        switchSections();
        updateSuccessMessage(email);
    }
    else{
        displayErrors();
    }
})

dismiss.addEventListener('click', () => {
    switchSections();
})
