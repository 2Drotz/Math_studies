const audioYes = document.querySelector('#yes'),
   audioNo = document.querySelector('#no'),
   option = document.querySelectorAll('#option'),
   znak = document.querySelector('#znak'),
   btnLink = document.querySelectorAll('.btn'),
   done = document.querySelector('#done'),
   fail = document.querySelector('#fail');

let answer = 0,
   doneAnimation,
   failAnimation;

function generateEquation() {
   let num1 = Math.floor(Math.random() * 10),
      num2 = Math.floor(Math.random() * 12);


   answer = num1 + num2;


   let wrongAnswer1 = answer + 1,
      wrongAnswer2 = answer - 1;

   document.querySelector('#num1').innerHTML = num1;
   document.querySelector('#num2').innerHTML = num2;

   let allAnswer = [answer, wrongAnswer1, wrongAnswer2];
   allAnswer.sort(function () {
      return Math.floor(Math.random(allAnswer) - 0.5);
   });

   option.forEach((item, i) => {
      item.innerHTML = allAnswer[i];
   });
}


function generateEquation2() {
   let num1 = Math.floor(Math.random() * 10),
      num2 = Math.floor(Math.random() * 12);

   answer = num1 - num2;


   let wrongAnswer1 = answer + 1,
      wrongAnswer2 = answer - 1;

   document.querySelector('#num1').innerHTML = num1;
   document.querySelector('#num2').innerHTML = num2;

   let allAnswer = [answer, wrongAnswer1, wrongAnswer2];
   allAnswer.sort(function () {
      return Math.floor(Math.random(allAnswer) - 0.5);
   });

   option.forEach((item, i) => {
      item.innerHTML = allAnswer[i];
   });
}


generateEquation();


option.forEach((item) => {

   item.addEventListener('click', () => {
      if (znak.textContent == '+') {
         if (item.innerHTML == answer) {
            generateEquation();
            audioYes.play();
            doneCounter();

         } else {
            audioNo.play();
            failCounter();
         }
      } else {
         if (item.innerHTML == answer) {
            generateEquation2();
            audioYes.play();
            doneCounter();

         } else {
            audioNo.play();
            failCounter();
         }
      }
   });
});



function doneCounter() {
   let doneCount = done.textContent;
   doneCount++;
   animate(doneAnimation, done);
   done.textContent = doneCount;

   if (doneCount >= 5) {
      alert('Молодец ты проходишь на следующий уровень!');
      done.textContent = 0;
      fail.textContent = 0;
   }
}
function failCounter() {
   let failCount = fail.textContent;
   failCount++;
   fail.textContent = failCount;
   animate(failAnimation, fail);

   if (failCount == 3) {
      alert('Ты проиграл!');
      fail.textContent = 0;
      done.textContent = 0;
   }
}




btnLink.forEach((item) => {

   item.addEventListener('click', () => {
      if (item.textContent === 'Вычитание') {
         generateEquation2();
         znak.textContent = '-';

      } else if (item.textContent === 'Сложение') {
         generateEquation();
         znak.textContent = '+';
      }
      fail.textContent = 0;
      done.textContent = 0;
   });
});

let scale = [
   {
      filter: 'opacity(100%)',
   },
   {
      filter: 'opacity(0%)',
   },
   {
      filter: 'opacity(100%)',
   }
];


let time = {
   duration: 250,
   iterations: 1
};


animate = (animate, item) => {
   if (!animate) {
      animate = item.animate(scale, time);

   } else {
      animate.play();
   }
};