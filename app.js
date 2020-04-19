document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const scoreDisplay = document.querySelector('#score');
  const startBtn = document.querySelector('#startbutton')



  const width =10; 
  let currentIndex = 0; //essentially the first div in our grid
   let appleIndex = 0; // first div in our grid
   let currentSnake = [2,1,0];// so the div in our grid bieng 2 (for the head), 0 bieng the end(tail) and 1's which are all bodies 
   let direction = 1; 
   let score = 0; 
   let speed = .85; 
   let intervalTime = 0; 
   let interval = 0; 

   function startGame () {
       console.log('button clicked')
       currentSnake.forEach( index => squares[index].classList.remove('snake'));
       squares[appleIndex].classList.remove('apple');
       clearInterval(interval);
       score = 0;
       randomApple()
       direction =1; 
       scoreDisplay.textContent = score; 
       intervalTime = 700;
       currentSnake = [2,1,0]; //a nested array inside squares which hold indexes 
       currentIndex = 0; 
       currentSnake.forEach(index => squares[index].classList.add('snake')); 
       interval = setInterval(moveOutcomes, intervalTime);
    }

    // this function deals with all of the move outcomes of the snake 
    
    //also deals with snake getting apple 
    function moveOutcomes (){
          if (
              (currentSnake[0] + width >= (width * width) && direction === width) || //if snake hits bottom
              (currentSnake[0] % width === width - 1 && direction === 1) || //if snake hits right wall
              (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
              (currentSnake[0] - width < 0 && direction === -width) || //if snake hits the top
              squares[currentSnake[0] + direction].classList.contains('snake') //if snake goes into itself
          ) {
               return clearInterval(interval);
        }

        const tail = currentSnake.pop(); // tail stores index value 
        squares[tail].classList.remove('snake'); 
        currentSnake.unshift(currentSnake[0] + direction);

        if(squares[currentSnake[0]].classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple'); 
            squares[tail].classList.add('snake');
            currentSnake.push(tail); 
            randomApple(); 
            score++;
            scoreDisplay.textContent = score;
            clearInterval(interval);
            intervalTime = intervalTime * speed; 
            interval = setInterval(moveOutcomes, intervalTime)
        }
        squares[currentSnake[0]].classList.add('snake')
   
     }

        function randomApple () {
            do {
                appleIndex = Math.floor(Math.random() * squares.length)
            } while (squares[appleIndex].classList.contains('snake'))
              squares[appleIndex].classList.add('apple');
                            
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
    startBtn.addEventListener('click',startGame);
});