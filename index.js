document.addEventListener("DOMContentLoaded", function () {

// Find the section with the class "section-form"
    let sectionForm = document.querySelector('.section-form');
    // Apply inline styles to the section-form element
    sectionForm.style.display = "flex"
    sectionForm.style.justifyContent = "center"
    sectionForm.style.alignItems = "center"
    sectionForm.style.width = "100%"
    sectionForm.style.height = "100vh"
    sectionForm.style.marginBottom = "8rem"


// Create a form element
    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "#")

    // Apply inline styles to the form element
    form.style.display = "flex"
    form.style.flexDirection = "column"
    form.style.width = "30%"
    form.style.alignItems = "center"


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
    submitButton.style.width = "50%"


    // Apply inline styles to the inputs elements
    firstNameLabelInput.style.padding = "8px 20px";
    firstNameLabelInput.style.marginTop = "8px";
    firstNameLabelInput.style.marginBottom = "8px";
    firstNameLabelInput.style.width = "60%"
    firstNameLabelInput.style.borderRadius = "5px"
    secondNameLabelInput.style.marginTop = "8px";
    secondNameLabelInput.style.width = "60%"
    secondNameLabelInput.style.borderRadius = "5px"
    secondNameLabelInput.style.padding = "8px 20px";

// Append input elements to the form
    form.appendChild(firstNameLabel);
    form.appendChild(firstNameLabelInput);
    form.appendChild(secondNameLabel);
    form.appendChild(secondNameLabelInput);
    form.appendChild(submitButton);


// Append the form to the section
    sectionForm.appendChild(form)


    function rotateElement(element, letterCount, direction = 'clockwise') {
        let rotateAmount = letterCount * 5; // Each letter rotates the form by 5 degrees
        rotateAmount = Math.min(rotateAmount, 90); // Cap rotation at 90 degrees

        // Set the transform origin based on rotation direction
        element.style.transformOrigin = direction === 'clockwise' ? 'left center' : 'right center';

        // Apply rotation in the specified direction
        const rotateDeg = direction === 'clockwise' ? rotateAmount : -rotateAmount;
        element.style.transform = `rotate(${rotateDeg}deg)`;
    }



    if (firstNameLabelInput) {
        firstNameLabelInput.addEventListener('input', function() {
            const letterCount = firstNameLabelInput.value.length;
            rotateElement(firstNameLabelInput, letterCount, 'anticlockwise');
        });
    }

    if (secondNameLabelInput) {
        secondNameLabelInput.addEventListener('input', function() {
            const letterCount = secondNameLabelInput.value.length;
            rotateElement(secondNameLabelInput, letterCount, 'clockwise');
        });
    }





    // Function to shake an element up and down
    /*function rotateElementAntiClockwise(element, letterCount) {
        let rotateAmount = letterCount * 5; // Each letter rotates the form by 5 degrees
        if (rotateAmount > 90) {
            rotateAmount = 90;
        }
        element.style.transformOrigin = "right center"; // Set the rotation origin to the left side
        element.style.transform = `rotate(-${rotateAmount}deg)`;  // Rotate anticlockwise
    }



// Add an event listener for input to trigger the rotation
//     const firstNameLabelInputAction = document.getElementsByClassName('firstNameLabelInput');
    firstNameLabelInput.addEventListener('input', function() {
        const letterCountFirstNameLabelInput = firstNameLabelInput.value.length; // Get number of letters in the input
        rotateElementAntiClockwise(firstNameLabelInput, letterCountFirstNameLabelInput); // Rotate the form based on letter count
    });


    function rotateElementClockwise(element, letterCount) {
        let rotateAmount = letterCount * 5; // Each letter rotates the form by 5 degrees
        if (rotateAmount > 90) {
            rotateAmount = 90;
        }
        element.style.transformOrigin = "left center"; // Set the rotation origin to the left side
        element.style.transform = `rotate(${rotateAmount}deg)`;  // Rotate anticlockwise
    }

    secondNameLabelInput.addEventListener('input', function() {
        const letterCountSecondNameLabelInput = firstNameLabelInput.value.length; // Get number of letters in the input
        secondNameLabelInput.addEventListener('input', function() {
            const letterCount = secondNameLabelInput.value.length; // Get number of letters in the input
            rotateElementClockwise(secondNameLabelInput, letterCountSecondNameLabelInput); // Rotate the form based on letter count
        })
    });*/

})
