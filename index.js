// Write your code here!
// Remove the existing <main> element with id 'main'
document.querySelector("main#main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id of the new <h1> to 'victory'
newHeader.id = "victory";

// Set the text content of the new <h1>
newHeader.innerHTML = "Your-Name is the champion"; // Replace "Your-Name" with your actual name

// Append the new header to the body
document.body.appendChild(newHeader);
