
const INCREASE_NUMBER_ANIMATION_SPEED = 50; /*Раздел "Управление веб-страницей с помощью JavaScript". Тема "Работа над проектом"*/
function increaseNumberAnimationStep (i, element, endNumber) {
    if (i <= endNumber) {
      if (i === endNumber) {
        element.innerText = i + '+';
      } else {
        element.innerText = i;
      }
        i+=100;   /*Проектное задание 1.3*/
       setTimeout(function() {   /*Проектное задание 1.1 Раздел "Управление веб-страницей с помощью JavaScript". Тема "Работа над проектом"*/
          increaseNumberAnimationStep(i, element, endNumber);
        }, INCREASE_NUMBER_ANIMATION_SPEED);
      }
    }
function initIncreaseNumberAnimation() {
    const element = document.querySelector('.features__clients-count');  /*Проектное задание 1.2*/
    
    increaseNumberAnimationStep(0, element, 5000);   /*Проектное задание 1.2*/
   }
  initIncreaseNumberAnimation();