const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

let p1Number = 0;
let p2Number = 0;

let winningScore = 3;
let gameOver = false;


p1Button.addEventListener('click', function (e) {

    if (!gameOver) {
        p1Number += 1;
        p1Score.textContent = p1Number;
    }

    if (p1Number === winningScore) {
        gameOver = true;
        if (p1Number === winningScore) {
            gameOver = true;
            p1Score.classList.add('winner');
            p2Score.classList.add('loser');
        }
    }

})


p2Button.addEventListener('click', function (e) {
    if (!gameOver) {
        p2Number += 1;
        p2Score.textContent = p2Number;
    }

    if (p2Number === winningScore) {
        gameOver = true;
        p2Score.classList.add('winner');
        p1Score.classList.add('loser');
    }

})

resetButton.addEventListener('click', reset)

function reset() {
    p1Number = 0;
    p1Score.textContent = p1Number;

    p2Number = 0;
    p2Score.textContent = p1Number;

    gameOver = false;

    p1Score.classList.remove('winner', 'loser');
    p2Score.classList.remove('winner', 'loser');

}

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

