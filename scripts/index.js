const hamburger = document.querySelector('.hamburger');
const crossBtn = document.querySelector('.cross-btn');
const mobileNav = document.querySelector('.mobile-nav');
const applyNowForm = document.querySelector('.registration-form');


hamburger.addEventListener('click', (e)=>{
    mobileNav.classList.remove('-translate-x-full');
})

crossBtn.addEventListener('click', (e)=>{
    mobileNav.classList.add('-translate-x-full');
})


function isValidEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function isValidPhone(email) {
    return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(email);
}

applyNowForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const { fullName, email, phone, country, message} = applyNowForm.elements;
    console.log(fullName.value, email.value, phone.value, country.value, message.value);

    if(!fullName.value.trim()){
        alert('Full Name is required!');
    }

    if(!email.value || !isValidEmail(email.value)){
        alert('Please enter a valid email address.')
    }

    if(!phone.value || !isValidPhone(phone.value)){
        alert('Please enter a valid phone number.')
    }

    alert('Form Submit Sucesssfully!');
    applyNowForm.reset();
})