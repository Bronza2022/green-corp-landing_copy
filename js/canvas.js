const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"]; /*Проектное задание 7.3_3 Canvas. Реализуем метод init. В методе init нужно инициализировать цвет пузырька одним из случайных цветов. Для этого заведем глобальную переменную с цветами пузырьков, они обозначены в формате RGB.*/
const BUBBLE_DENSITY = 100;     

function generateDecimalBetween(left, right) { /*Проектное задание 7.4_1 Canvas. Затем надо проинициализировать начальную позицию пузырька, его размер, скорость движения вверх, прозрачность цвета. Тут пригодится хелпер, который будет возвращать случайное число от MIN до MAX. Добавим его в проект сразу после константы COLORS. Как видно, он использует функцию Math.random, чтобы получить число в промежутке от left до right, а затем с помощью метода toFixed(2) мы оставляем от числа два знака после запятой.*/
   return (Math.random() * (left - right) + right).toFixed(2);                                      
}    
  
class Bubble {     /*Проектное задание 7.3 Canvas*/
  constructor(canvas) { /*Проектное задание 7.3_1 Canvas. Конструктор принимает аргумент canvas, это будет html-элемент canvas. Он нужен, чтобы понимать размерность холста. Так как класс Bubble тоже будет рассчитывать позицию конкретной точки на холсте, нам нужно понимать, за какие размеры выходить нельзя. Конструктор должен запомнить полученный на входе canvas, проинициализировать им свойство canvas и вызвать методы getCanvasSize и init*/
     this.canvas = canvas; 
     this.getCanvasSize();
     this.init();
}

  getCanvasSize() {                      /*Проектное задание 7.3_2 Canvas. Метод getCanvasSize будет вытаскивать из холста его размеры и сохранять в переменные внутри класса Bubble.*/
     this.canvasWidth = this.canvas.clientWidth; /* Проектное задание 7.3_2 Canvas. Реализуем метод getCanvasSize. Он должен выставить свойства canvasWidth и canvasHeight, которые нужны нам для расчета положения точки на холсте. Высоту и ширину html-элемента получим с помощью свойства clientWidth и clientHeight.*/
     this.canvasHeight = this.canvas.clientHeight;
}

  init() {             /*Проектное задание 7.3_3 Canvas. Метод init будет инициализировать пузырек: выбирать ему один из случайных цветов, какой-то размер, начальное положение на холсте.*/
     this.color = COLORS[Math.floor(Math.random() * COLORS.length)]; /*Проектное задание 7.4 Canvas. В методе init проинициализируем свойство color класса (this.color) случайным цветом из массива COLORS. Для этого с помощью Math.random нужно сгенерировать случайное число от 0 до длины массива COLORS минус 1. Затем получить целую часть от этого числа (Math.floor), которая будет индексом для массива COLORS.*/
     this.alpha = generateDecimalBetween(5, 10) / 10; /*Проектное задание 7.5_1 Canvas. В методе init проинициализируем свойство alpha класса (this.alpha). Оно должно быть равно случайному числу от 5 до 10, а затем полученное число нужно разделить на 10, так как alpha для цвета обозначает прозрачность, которая принимает значения от 0 до 1.*/ 
     this.size = generateDecimalBetween(1, 3); /*Проектное задание 7.5 Canvas. В методе init проинициализируем свойство size класса (this.size) случайным числом от 1 до 3.*/ 
     this.translateX = generateDecimalBetween(0, this.canvasWidth); /*Проектное задание 7.5_2 Canvas. Проинициализируем начальную позицию пузырька, x- и y-координаты. Для этого проинициализируйте свойство translateX случайным числом от 0 до this.canvasWidth*/
     this.translateY = generateDecimalBetween(0, this.canvasHeigh); /*Проектное задание 7.5_3 Canvas. Проинициализируем свойство translateY случайным числом от 0 до this.canvasHeight.*/
     this.velocity = generateDecimalBetween(20, 40); /*Проектное задание 7.5_4 Canvas.проинициализируем свойства направления и скорости движения пузырька. У каждого пузырька будет своя скорость движения, чтобы они выглядели более реалистично. Проинициализируем свойство velocity, в котором будет записано значение скорости. Мы сделали его случайным числом от 20 до 40.*/
     this.movementX = generateDecimalBetween(-2, 2) / this.velocity; /*Проектное задание 7.5_5 Canvas. Теперь инициализируем дельту перемещения точки по оси x и по оси y. На это число мы будем все время смещать позицию пузырька, таким образом, эти свойства задают скорость и направление движения. Как видно, движение по горизонтали (movementX) может быть от -2 до 2 — пузырьки будут идти не строго вверх, а с небольшим смещением.*/
     this.movementY = generateDecimalBetween(1, 20) / this.velocity; /*Проектное задание 7.5_5 Canvas.*/
  }

  move() { /*Проектное задание 7.6 Canvas.Реализуем метод move. В нем нужно обновлять x- и y-координаты нашего пузырька на значения movementX и movementY. X- и y-координаты хранятся в свойствах translateX и translateY. Метод move будет пересчитывать положение пузырька на холсте, так как фигуры должны двигаться вверх.*/
     this.translateX = this.translateX - this.movementX; /*Проектное задание 7.6_1 Canvas. В методе move обновим значение свойства translateX, присвоив ему новое значение this.translateX - this.movementX.*/
     this.translateY = this.translateY - this.movementY; /*Проектное задание 7.6_2 Canvas. В методе move обновим значение свойства translateY, присвоив ему новое значение this.translateY - this.movementY.*/
    
    if (this.translateY < 0 || this.translateX < 0 || this.translateX > this.canvasWidth) { /*Проектное задание 7.6_3 Canvas. Отлично, метод move готов. Однако нужно еще кое-что в нем исправить. Сейчас мы будем постоянно уменьшать x- и y-координаты и в какой-то момент можем выйти за границы размеров холста. Нужно обработать эту ситуацию и вернуть их обратно на холст. Как видно из этого блока, мы проверяем, что значения опустились ниже 0 в координатах или вышли за горизонтальные границы, и, если это так, заново инициализируем данные.*/
        this.init();
        this.translateY = this.canvasHeight;
     }
   }
 }

// const canvas = document.getElementById("orb-canvas"); /*Проектное задание 7.6_4 Canvas. Теперь проверим работу класса Bubble: создадим несколько пузырьков, экземпляров класса и посмотрим, что они внутри себя хранят. В конструкторе они принимают на вход элемент, внутри него они должны размещаться, давайте получим его с помощью document.getElementById*/ 

// const bubbles = []; /*Проектное задание 7.6_5 Canvas. Теперь создадим массив bubbles, добавим туда пузырьки и выведем их содержимое*/
// bubbles.push(new Bubble(canvas));
// bubbles.push(new Bubble(canvas));
// bubbles.push(new Bubble(canvas));

// console.log(bubbles);

class CanvasBackground { /*Проектное задание 7.6_6 Canvas. Мы уже рассказывали, что в программе будет всего два класса — Bubble и CanvasBackground. Второй класс будет работать непосредственно с холстом: добавлять пузырьки, рисовать их, анимировать. Давайте удалим прошлый код, где создавали холст и выводили значения пузырьков в консоль. Добавим заготовку для класса CanvasBackground*/  
   constructor(id) { /*Проектное задание 7.6_7 Canvas. Итак, у нас есть конструктор и метод start. Конструктор принимает на вход id, это будет id-атрибут тега холста, по которому мы будем получать этот элемент. Метод start запустит анимацию: подстроит размеры холста, создаст пузырьки и анимирует их. Начнем с конструктора*/
      this.canvas = document.getElementById(id); /*Проектное задание 7.7 Canvas. В конструкторе класса проинициализируем свойство canvas html-элементом с id, переданным в аргументе (можно использовать функцию document.getElementById(...)).*/
      this.ctx = this.canvas.getContext("2d");  /*Проектное задание 7.7_1 Canvas. В конструкторе класса проинициализируем свойство this.ctx 2d-контекстом холста (метод canvas.getContext).*/
      this.dpr = window.devicePixelRatio; /*Проектное задание 7.7_2 Canvas. Понадобится также значение devicePixelRatio. В конструкторе класса проинициализируем свойство dpr значением window.devicePixelRatio.*/
   }
   start() { /*Проектное задание 7.7_3 Canvas.Реализуем теперь метод start.*/
      this.canvasSize(); /*Проектное задание 7.7_4 Canvas. Сначала нужно выставить ширину и высоту холста и настроить масштаб, это мы сделаем в методе canvasSize.*/
      this.generateBubbles(); /*Проектное задание 7.7_5 Canvas. Далее надо сгенерировать пузырьки, это мы сделаем в методе generateBubbles.*/
      this.animate(); /*Проектное задание 7.7_6 Canvas. И последнее — запустить анимацию, для этого вызовем метод animate.*/
   }  
  
   canvasSize() { /*Проектное задание 7.8 Canvas.*/
     this.canvas.width = this.canvas.offsetWidth * this.dpr;
     this.canvas.height = this.canvas.offsetHeight * this.dpr;

     this.ctx.scale(this.dpr, this.dpr); /*Проектное задание 7.9 Canvas.*/
 }
  animate() { /*Проектное задание 7.11 Canvas.*/
     this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
    
     this.bubblesList.forEach((bubble) => { /*Проектное задание 7.12 Canvas.*/
         bubble.move();
         this.ctx.translate(bubble.translateX, bubble.translateY);
         this.ctx.beginPath(); /*Проектное задание 7.13 Canvas.*/
         this.ctx.arc(0, 0, bubble.size, 0, 2 * Math.PI);
         this.ctx.fillStyle = "rgba(" + bubble.color + "," + bubble.alpha + ")";
         this.ctx.fill();
         this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
   });
     requestAnimationFrame(this.animate.bind(this)); /*Проектное задание 7.14 Canvas.*/
}

 generateBubbles() { /*Проектное задание 7.10 Canvas.*/
     this.bubblesList = [];
     for (let i = 0; i < BUBBLE_DENSITY; i++) {
         this.bubblesList.push(new Bubble(this.canvas))
     }
   }
}
const canvas = new CanvasBackground("orb-canvas");
canvas.start();                                      
       
 