// Задание 1

// 1) Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.

// С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые).

// Добавить эти объекты в массив shops.

// В итоге должен получиться массив объектов типа:

// [{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]



// 2) С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:

// ['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск']

// let array = [];

// function Shop(name, adress){
//     this.name = name;
//     this.adress = adress;
// }

// let Green = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
// let ProStore = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');

// array.push(Green, ProStore);

// let newArray = array.map(
//     function filter (item){
//         return item.adress;
//     }
// )

// console.log(newArray);
// console.log(array);


// Задание 2

// По данному url расположена задача:

// https://jsonplaceholder.typicode.com/todos/1

// В html предусмотреть <div></div>
// Достать с сервера заголовок задачи и отобразить его в div.

// let h1 = document.createElement('h1');
// let div = document.querySelector('div');

// let httpRequest = new XMLHttpRequest();

// httpRequest.onload = function() {
//     h1.innerText = (JSON.parse(httpRequest.responseText).title);
//     div.appendChild(h1);
// };

// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
// httpRequest.send();

// Задание 3

// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.

// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.

// let ul = document.querySelector('ul');
// let httpRequest = new XMLHttpRequest();

// httpRequest.onload = function() { 
//     let array = (JSON.parse(httpRequest.responseText));
//     let newArray = array.map(
//         function (item){
//             return item.title;
//         }
//     )
//     newArray.forEach((index) => {
//         let li = document.createElement('li');
//         li.innerText = [index];
//         console.log(index);
//         ul.appendChild(li);
//     })
// };

// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// httpRequest.send();

// Задание 4

// Отобразить на странице 10 первых комментариев с сервера https://jsonplaceholder.typicode.com/comments

// Оформить тегами как в ПРИМЕРЕ.



// Порядок работы:

// 1) записать в переменную блок для отрисовки результата.

// 2) описать функцию отрисовки результата (напр. addInfo). Функция принимает 3 параметра - тег, содержимое и название класса для CSS. Она создает тег, наполняет его текстом, добавляет класс и помещает в блок на страницу.

// 3) создать http-запрос и получить результат в виде массива объектов (через JSON.parse). Записать этот результат в переменную, т.к. с ним будем дальше работать.

// 4) внутри функции .onload:

// - обойти через цикл первые 10 элементов массива

// - вызвать функцию addInfo 3 раза: для добавления на страницу имени, имейла и комментария.

// 5) прописать CSS для классов.


// let result = document.querySelector('.result');
// let httpRequest = new XMLHttpRequest();

// httpRequest.onload = function() {
//     let array = (JSON.parse(httpRequest.responseText));
//     let nameArray = array.map(
//         function (item){
//             return item.name
//         }
//     )
//     let emailArray = array.map(
//         function (item){
//             return item.email
//         }
//     )
//     let bodyArray = array.map(
//         function (item){
//             return item.body
//         }
//     )
//     for (let i = 0; i < 10; i++){
//         let name = document.createElement('h3');
//         let email = document.createElement('p');
//         let body = document.createElement('p');
//         console.log(result)
//         name.classList.add('name');
//         email.classList.add('email');
//         body.classList.add('body');
//         name.innerText = nameArray[i];
//         email.innerText = emailArray[i];
//         body.innerText = bodyArray[i];
//         result.appendChild(name);
//         result.appendChild(email);
//         result.appendChild(body);
//     }
// };

// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments');
// httpRequest.send();