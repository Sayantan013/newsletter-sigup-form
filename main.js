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

const isValidEntry = (email) => {
    const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return reg.test(email);
}

const displayErrors = () => {
    errMsg = form.querySelector("#error-msg");
    errMsg.classList.toggle("hidden");
    const = 
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
        return displayErrors();
    }
})

dismiss.addEventListener('click', () => {
    switchSections();
})