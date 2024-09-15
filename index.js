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
    form.style.width = "20%"


    let firstNameLabel = document.createElement("label");
    firstNameLabel.textContent = "First Name";


    let firstNameLabelInput = document.createElement("input");
    firstNameLabelInput.setAttribute("type", "text");
    firstNameLabelInput.setAttribute("name", "name");


    let secondNameLabel = document.createElement("label");
    secondNameLabel.textContent = "Last Name";


    let secondNameLabelInput = document.createElement("input");
    secondNameLabelInput.setAttribute("type", "text");
    secondNameLabelInput.setAttribute("name", "name");


    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit"

    // Apply inline styles to the button element
    submitButton.style.padding = "8px 20px";
    submitButton.style.marginTop = "30px";

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
})
