const option1 = document.querySelector('#option1'),
   option2 = document.querySelector('#option2'),
   audioYes = document.querySelector('#yes'),
   audioNo = document.querySelector('#no'),
   option3 = document.querySelector('#option3');

let answer = 0;

function generate_equation() {
   let num1 = Math.floor(Math.random() * 20);
   let num2 = Math.floor(Math.random() * 22);
   answer = num1 + num2;

   let wrongAnswer1 = answer + 1;
   let wrongAnswer2 = answer - 1;

   document.querySelector('#num1').innerHTML = num1;
   document.querySelector('#num2').innerHTML = num2;


   let allAnswer = [answer, wrongAnswer1, wrongAnswer2];
   allAnswer.sort(function () {
      return Math.floor(Math.random(allAnswer) - 0.5);
   });



   option1.innerHTML = allAnswer[0];
   option2.innerHTML = allAnswer[1];
   option3.innerHTML = allAnswer[2];
}
option1.addEventListener('click', () => {
   if (option1.innerHTML == answer) {
      generate_equation();
      audioYes.play();

   } else {
      audioNo.play();
   }
});

option2.addEventListener('click', () => {
   if (option2.innerHTML == answer) {
      generate_equation();
      audioYes.play();
   } else {
      audioNo.play();
   }
});

option3.addEventListener('click', () => {
   if (option3.innerHTML == answer) {
      generate_equation();
      audioYes.play();
   } else {
      audioNo.play();
   }
});


generate_equation();

console.log(Math.floor(Math.random() - 0.5));