const form = document.querySelector(".registration-form");
const success = document.querySelector(".success");

//   Getting Value of Input
function getInput(id) {
    if (id === "gender") {
        return document.querySelectorAll("#" + id);
    } else { return document.getElementById(id); }
}
// getting Error Input ID
function getErrorInput(id) {
    return document.getElementById(id + "_error");
}
// Show Error 
function showError(id, message) {
    getErrorInput(id).textContent = message;
}
// Clear Function
function clearError(id) {
    document.getElementById(id + "_error").textContent = '';
}

// Form Submssion
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Input value storing to variables
    const fullName = getInput("fullname");
    const email = getInput("email");
    const password = getInput("password");
    const dob = getInput("dob");
    const gender = getInput("gender");
    const country = getInput("country");
    const bio = getInput("bio");
    const resume = getInput("resume");
    const terms = getInput("terms");


    // Full Name Validation
    if (fullName.value.trim() === '' || fullName.value.trim().length > 50) {
        showError("fullname", "Name is required & maximum of 50 characters");
        valid = false;
    } else { clearError("fullname"); }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError("email", "Please enter a valid email address.");
        valid = false;
    } else { clearError("email"); }

    //Password Validation
    const pwdRegex = /^(?=.*\d)(?=.*[A-Z]).{4,}$/;
    if (!pwdRegex.test(password.value.trim())) {
        showError("password", "Password must be at least 4 characters & one uppercase letter & one number.");
        valid = false;
    } else { clearError("password"); }

    // Date of Birth Validation
    if (dob.value === '') {
        showError("dob", "Enter date of birth");
        valid = false;
    }
    else { clearError("dob"); }

    // Gender Validation
    let isGenderSelected = false;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderValue = gender[i].value;
            isGenderSelected = true;
            break;
        }
    }
    if (!isGenderSelected) {
        showError("gender", "Please select a gender");
        valid = false;
    } else {
        clearError("gender");
    }

    // Country Validation
    if (country.value === '') {
        showError("country", "Please select a country.");
        valid = false;
    } else { clearError("country"); }

    // Bio Validation
    if (bio.value.trim() === '' || bio.value.trim() > 200) {
        showError("bio", "Enter a short bio (up to 200 characters).");
        valid = false;
    } else { clearError("bio"); }

    // Resume Validation
    if (resume.files.length === 0) {
        showError("resume", "Please upload your resume.");
        valid = false;
    } else { clearError("resume"); }

    // Terms and Conditions Validations
    if (!terms.checked) {
        showError("terms", "Please agree terms");
        valid = false;
    } else { clearError("terms"); }


    // Submit Valiadtion

    if (valid) {
        success.textContent = "Succesful";
        success.style.display = "block";
        setTimeout(() => {
            success.style.display = "none";
        }, 3000);
        alert(terms.value);
        form.reset();
    }
});