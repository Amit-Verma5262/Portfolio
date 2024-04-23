// Submit Button Click Event Listener
var submitButton = document.getElementById('btn1');

if (submitButton) {
  submitButton.addEventListener('click', function() {
    alert('Thanks for visiting! Form Submitted');
  });
} else {
  console.error('Submit button not found.');
}

// Search Button Click Event Listener
var searchButton = document.getElementById('searchbtn');

if (searchButton) {
  searchButton.addEventListener('click', function() {
    alert('Please wait! Searching');
  });
} else {
  console.error('Search button not found.');
}

// JavaScript for Typing Animation
const typedHeading = document.getElementById('typed-heading');
const headingText = 'Amit Verma';
let charIndex = 0;

function typeHeading() {
  if (charIndex < headingText.length) {
    typedHeading.textContent += headingText[charIndex];
    charIndex++;
    setTimeout(typeHeading, 100); // Adjust the typing speed if needed
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(typeHeading, 2000); // Start typing after 2 seconds (adjust as needed)
});
