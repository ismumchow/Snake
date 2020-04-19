document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const scoreDisplay = document.querySelector('#score');
  const startBtn = document.querySelector('#start-button')

  const width =10; 
  let currentIndex = 0; //essentially the first div in our grid
   let appleIndex = 0; // first div in our grid
   let currentSnake = [2,1,0];// so the div in our grid bieng 2 (for the head), 0 bieng the end(tail) and 1's which are all bodies 
   let direction = 1; 
   let score = 0; 
   let speed = 0.9; 
   let intervalTime = 0; 
   let interval = 0; 

   function startGame () {
       currentSnake.forEach( index => squares[index].classList.remove('snake'));
       squares[appleIndex].classList.remove('apple');
       clearInterval(interval);
       score = 0;
       // we must randomly generate an apple
   }
   function control(e) {
       squares[currentIndex].classList.remove('snake'); 
       if(e.keyCode === 39) { // press right, one box right
           direction = 1; 
       }
       else if (e.keyCode === 38) {// if we go up snake arrow will go one row up (10 boxes)
           direction = -width // if we press down arrow
       }
       else if (e.keyCode ===37) {
           direction = -1;
       }
       else if (e.keyCode === 40) {
           direction = +width
       }
   }
    document.addEventListener('keyup', control);
})