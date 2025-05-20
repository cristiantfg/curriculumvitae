// This file contains the JavaScript code for the website. It handles interactivity and dynamic content on the webpage.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.createElement('h1');
    greetingElement.textContent = 'Welcome to Our Website!';
    document.body.appendChild(greetingElement);

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Click Me!';
    document.body.appendChild(buttonElement);

    buttonElement.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});