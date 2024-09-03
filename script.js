function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

window.onload = function() {
    document.getElementById('ddos-popup').style.display = 'block';

    document.getElementById('ddos-close').onclick = function() {
        var popup = document.getElementById('ddos-popup');
        popup.classList.add('fade-out');
        setTimeout(function() {
            popup.style.display = 'none';
        }, 500); // Time matches the transition duration in CSS
    };
};
