/*
    lab.js
 */

var name = 'John';  // name of a user

var $ = (5, 6, 7);
alert($);

var age = prompt('Сколько вам лет?', '');
if(age < 14) {
    alert('Пошел отсюда, сопляк!');
} else { // необязательный блок
    alert('Дарова брателло!');
}