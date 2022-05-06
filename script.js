'use strict';

const checkBtn = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener ("click", function() {
    let inputNumber = Number(document.querySelector('.guess').value);

    if (!inputNumber){
        document.querySelector('.message').textContent = 'no number'
    } 
    //winner code
    else if (inputNumber === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score > highScore ){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //input number is not equal to secretnumber  
    else if (inputNumber !== secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = 
        inputNumber > secretNumber ? 'Too high!' : 'Too low!';
        score--;
        document.querySelector('.score').textContent = score; 
        } else {
            document.querySelector('.score').textContent = 'you lost the game'; 
        }
    }  
    // //when guess is to hight
    // else if (inputNumber > secretNumber) {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too High';
    //         score--;
    //         document.querySelector('.score').textContent = score; 
    //     } else {
    //         document.querySelector('.score').textContent = 'you lost the game'; 
    //     }
    // } 
    // //when guess is too low
    // else if (inputNumber < secretNumber) {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.score').textContent = 'you lost the game'; 
    //     }
    // }
});

document.querySelector('.again').addEventListener ("click", function() {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';

});
