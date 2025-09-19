const buttons = document.querySelectorAll('.choice-btn');
const result = document.getElementById('result');
const choices = ['rock', 'paper', 'scissors'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (userChoice === computerChoice) {
            result.textContent = `It's a tie! Both chose ${userChoice}.`;
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        } else {
            result.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        }
    });
});
