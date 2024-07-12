function revealMessage() {
    var messageContainer = document.getElementById("message-container");
    messageContainer.classList.remove("hidden");

    var clickSound = document.getElementById("click-sound");
    clickSound.play();

    // Change background
    document.body.style.backgroundImage = "url('sunset2.jpg')";
}

function showHearts() {
    var heartSound = document.getElementById("heart-sound");
    heartSound.play();

    for (let i = 0; i < 20; i++) {
        createHeart();
    }

    // Create confetti
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }

}

function showNoMessage() {
    var message = document.getElementById("message");
    message.innerText = "Itu membuatku sakit hati Its okay🙃💔";
    message.style.color = "rgb(63, 9, 59)";
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = getRandomColor();
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

function getRandomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener("DOMContentLoaded", function() {
    // No background music to play
});


