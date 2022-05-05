'use strict';

const checkBtn = document.querySelector('.check');

let secretNumber = document.querySelector('.number').textContent = 7;

let score = 20;

document.querySelector('.check').addEventListener ("click", function() {
    let inputNumber = Number(document.querySelector('.guess').value);

    if (!inputNumber){
        console.log('carielia');
    } 
    
    else if (inputNumber === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number';
    } 
    
    else if (inputNumber > secretNumber) {
        if(score > 0){
            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score; 
        } else {
            document.querySelector('.score').textContent = 'ypu lost the game'; 
        }
    } 
    
    else if (inputNumber < secretNumber) {
        if(score > 0){
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 'ypu lost the game'; 
        }
    }
});