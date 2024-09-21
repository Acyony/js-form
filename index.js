document.addEventListener("DOMContentLoaded", function () {

// Find the section with the class "section-form"
    let sectionForm = document.querySelector('.section-form');
    // Apply inline styles to the section-form element
    sectionForm.style.display = "flex"
    sectionForm.style.justifyContent = "center"
    sectionForm.style.alignItems = "center"
    sectionForm.style.width = "100%"
    sectionForm.style.height = "100vh"


// Create a form element
    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "#")

    // Apply inline styles to the form element
    form.style.display = "flex"
    form.style.flexDirection = "column"
    form.style.width = "30%"


    let firstNameLabel = document.createElement("label");
    // firstNameLabel.textContent = "First Name";


    let firstNameLabelInput = document.createElement("input");
    firstNameLabelInput.setAttribute("type", "text");
    firstNameLabelInput.setAttribute("name", "name");
    firstNameLabelInput.setAttribute("placeholder", "First Name");


    let secondNameLabel = document.createElement("label");
    // secondNameLabel.textContent = "Last Name";


    let secondNameLabelInput = document.createElement("input");
    secondNameLabelInput.setAttribute("type", "text");
    secondNameLabelInput.setAttribute("name", "name");
    secondNameLabelInput.setAttribute("placeholder", "Last Name");


    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit"

    // Apply inline styles to the button element
    submitButton.style.padding = "8px 20px";
    submitButton.style.marginTop = "60px";
    submitButton.style.background = "pink"
    submitButton.style.border = "none"
    submitButton.style.borderRadius = "50px"

    // Apply inline styles to the inputs elements
    firstNameLabelInput.style.padding = "8px 20px";
    secondNameLabelInput.style.padding = "8px 20px";
    firstNameLabelInput.style.marginTop = "8px";
    firstNameLabelInput.style.marginBottom = "8px";
    secondNameLabelInput.style.marginTop = "8px";


// Append input elements to the form
    form.appendChild(firstNameLabel);
    form.appendChild(firstNameLabelInput);
    form.appendChild(secondNameLabel);
    form.appendChild(secondNameLabelInput);
    form.appendChild(submitButton);


// Append the form to the section
    sectionForm.appendChild(form)


    // Function to shake an element up and down
    function rotateElementAntiClockwise(element, letterCount) {
        let rotateAmount = letterCount * 5; // Each letter rotates the form by 5 degrees
        element.style.transformOrigin = "left center"; // Set the rotation origin to the left side
        element.style.transform = `rotate(-${rotateAmount}deg)`;  // Rotate anticlockwise
    }

// Add an event listener for input to trigger the rotation
    const inputField = document.querySelector('input');
    inputField.addEventListener('input', function() {
        const letterCount = inputField.value.length; // Get number of letters in the input
        rotateElementAntiClockwise(inputField.form, letterCount); // Rotate the form based on letter count
    });


})
