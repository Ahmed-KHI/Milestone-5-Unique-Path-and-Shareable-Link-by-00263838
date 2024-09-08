var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get references to form elements using their IDs
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var expierenceElement = document.getElementById('expierence');
    var skillsElement = document.getElementById('skills');
    //**
    var usernameElement = document.getElementById("username");
    // Check if all form elements are present
    if (nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        expierenceElement &&
        skillsElement &&
        //**
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var expierence = expierenceElement.value;
        var skills = skillsElement.value;
        //**
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    \n    <p><strong>Name:</strong>  ".concat(name_1, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone Number :</strong> ").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    \n    <h3>Expierence</h3>\n    <p>").concat(expierence, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
        //**
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your 2024 Resume';
        // resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            //**
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
