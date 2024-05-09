// Function to handle form submission
document.getElementById('employeeForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form data
    var formData = new FormData(event.target);

    // Create an object to store form data
    var formDataObject = {};

    // Iterate over form data and store it in the formDataObject
    formData.forEach(function(value, key){
        formDataObject[key] = value;
    });

    // Log the form data to the console (you can do further processing here)
    console.log(formDataObject);

    // Get the value of attendance from the form data
    var attendance = formDataObject['attendance'];

    // Update the UI based on the selected attendance
    if (attendance === 'present') {
        // Set header background color to green
        document.querySelector('header').style.backgroundColor = 'green';
        // Display a message indicating the employee is present
        alert("Marked as present.");
    } else if (attendance === 'absent') {
        // Set header background color to red
        document.querySelector('header').style.backgroundColor = 'red';
        // Display a message indicating the employee is absent
        alert("Marked as absent.");
    }

    // Reset the form after submission
    event.target.reset();
});
