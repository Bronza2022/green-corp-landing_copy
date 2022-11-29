
const INCREASE_NUMBER_ANIMATION_SPEED = 50; /*Раздел "Управление веб-страницей с помощью JavaScript"/Элементы веб-страницы и методы обращения к ним/Работа над проектом*/
function increaseNumberAnimationStep (i, element, endNumber) { /*Раздел "Управление веб-страницей с помощью JavaScript"/Элементы веб-страницы и методы обращения к ним/Работа над проектом*/
    if (i <= endNumber) {
      if (i === endNumber) {
        element.innerText = i + '+';
      } else {
        element.innerText = i;
      }
        i+=100;   /*Проектное задание 1.3. Раздел "Управление веб-страницей с помощью JavaScript"/Элементы веб-страницы и методы обращения к ним/Работа над проектом*/
       setTimeout(function() {   /*Проектное задание 1.1 Раздел "Управление веб-страницей с помощью JavaScript"/Элементы веб-страницы и методы обращения к ним/Работа над проектом*/
          increaseNumberAnimationStep(i, element, endNumber);
        }, INCREASE_NUMBER_ANIMATION_SPEED);
      }
    }
function initIncreaseNumberAnimation() {
    const element = document.querySelector('.features__clients-count');  /*Проектное задание 1.2. Раздел "Управление веб-страницей с помощью JavaScript"/Элементы веб-страницы и методы обращения к ним/Работа над проектом*/
    
    increaseNumberAnimationStep(0, element, 5000);   /*Проектное задание 1.2. Раздел "Управление веб-страницей с помощью JavaScript"/Элементы веб-страницы и методы обращения к ним/Работа над проектом*/
   }
  initIncreaseNumberAnimation();
  

  document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) { /*Раздел "Управление веб-страницей с помощью JavaScript"/Изменение контента и стилей элементов/Работа над проектом*/
    if (event.target.value === 'other') {  
  //       // Должны добавить еще одно текстовое поле.
        const formContainer = document.createElement('div'); /*Проектное задание 3.1. Раздел "Управление веб-страницей с помощью JavaScript"/Изменение контента и стилей элементов/Работа над проектом*/
         formContainer.classList.add('form__group');
         formContainer.classList.add('form__other-input');

         const input = document.createElement('input'); /*Проектное задание 3.2. Раздел "Управление веб-страницей с помощью JavaScript"/Изменение контента и стилей элементов/Работа над проектом*/
         input.placeholder = "Введите ваш вариант";
         input.type = "text";
        
         formContainer.appendChild(input); /*Проектное задание 3.3. Раздел "Управление веб-страницей с помощью JavaScript"/Изменение контента и стилей элементов/Работа над проектом*/
         document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit')); /*Проектное задание 3.4. Раздел "Управление веб-страницей с помощью JavaScript"/Изменение контента и стилей элементов/Работа над проектом*/
       }
       const otherInput = document.querySelector('.form__other-input'); /*Проектное задание 3.6. Раздел "Управление веб-страницей с помощью JavaScript"/Изменение контента и стилей элементов/Работа над проектом*/
       if (event.target.value !== 'other' && otherInput) {  
  //        // Удаляем ранее добавленное текстовое поле, если оно есть в DOM.
         
          document.querySelector('#form form').removeChild(otherInput);
        }
    });
/*Проектное задание 3.4. Раздел "Управление веб-страницей с помощью JavaScript"/Изменение контента и стилей элементов/Работа над проектом*/