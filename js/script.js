// function showName() {
//     console.log('Вася!');
// }
// setTimeout(showName, 0);
// console.log('Коля!');
//Первым в консоли будет Коля!

// showMessage();
// function showMessage() {
//     console.log('Сообщение');
// }
//Функция объявлена верно и будет выведена, так как объявления с помощью Function Declaration

// showMessage();
// let showMessage = function() {
//     console.log('Сообщение');
// }
//Функция не будет выведена, так как объявлена с помощтю Function Expression и на момент ее вызова она еще не определена.

'use strict'
let showMessage;
if (2 > 1) {
    showMessage = function(){
        console.log('Сообщение');
    }  
}
showMessage();