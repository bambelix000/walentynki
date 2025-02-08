const messages = [
    "Na pewno?",
    "Na pewno na pewno??",
    "Ale czy jestes w 100% pewna?",
    "No proszę Cię",
    "Ale zastanów się chwilkę!",
    "Będzie mi przykrooo",
    "Bardzo bardzo przykro",
    "Baaaaaaaaaaaaaaaaaaaardzo przykro",
    "A może masaż stopek przekona???"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}