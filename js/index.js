//Выполнил Жогин Дмитрий 3ИСИП-821

//Отработка изученного материала на работу с DOM
//Задание 364
// //№1
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// elem1.addEventListener('blur', func1);
// function func1 () {
// elem2.textContent =  elem2.innerHTML + elem1.value ;
// }

// //№2
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// let elem6 = document.querySelector('#elem6');
// let button = document.querySelector('#button');
// button.addEventListener('click', func2);
// function func2 () {
// elem6.textContent = +elem3.value + +elem4.value + +elem5.value;
// }

// //№3
// let elem7 = document.querySelector('#elem7');
// let sum = 0;
// elem7.addEventListener('blur', func3);
// function func3 () {
// 	for(let elem of elem7.value){
// 		sum += +elem
// 		elem7.value = sum
// 	}
// }

// //№4
// let elem8 = document.querySelector('#elem8');
// let text = document.querySelector('#text');
// elem8.addEventListener('blur', func4);
// 	function func4(){
//     let arr = elem8.value.split(",");
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += parseInt(arr[i]);
//     }
//     let average = sum / arr.length;
//     text.textContent = text.innerHTML + average;
// }

// //№5
// let elem9 = document.querySelector('#elem9');
// let elem10 = document.querySelector('#elem10');
// let elem11 = document.querySelector('#elem11');
// let elem12 = document.querySelector('#elem12');
// elem9.addEventListener('blur', func5);
// function func5(){
//     let arr = elem9.value.split(" ");
// 		elem10.value = arr[0];
//         elem11.value = arr[1];
//         elem12.value = arr[2];
//     }

// //№6
// let elem13 = document.querySelector('#elem13');
// elem13.addEventListener("blur", func6);
// function func6() {
//     let elem = elem13.value;
//     let str = elem.split(" ");
//     let result = str.map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//     elem13.value = result;
// }

// //№7
// let elem14 = document.querySelector('#elem14');
// let text2 = document.querySelector('#text2');
// elem14.addEventListener("blur", func7); 
// function func7() {
//     let elem = elem14.value;
//     let words = elem.split(" ");
//     words = words.filter(function(word) {
//         return word !== "";
//     });
//     let count = words.length;
//     text2.textContent = text2.innerHTML + count;
// }

// //№8
// let elem15 = document.querySelector('#elem15');
// elem15.addEventListener("blur", func8);
// function func8() {
//     let date = elem15.value;
//     let elem = date.split(".");
//     let result = elem[2] + "-" + elem[1] + "-" + elem[0];
//     elem15.value = result;
// }

// //№9
// let elem16 = document.querySelector('#elem16');
// let button2 = document.querySelector('#button2');
// let text3 = document.querySelector('#text3');
// button2.addEventListener("click", func9);
// function func9() {
//     let word = elem16.value.toLowerCase();
//     if (word === word.split("").reverse().join("")) {
//         text3.textContent = text3.innerHTML + " читается с начала и с конца одинаково";
//     } else {
//         text3.textContent = text3.innerHTML + " НЕ читается с начала и с конца одинаково";
//     }
// }

// //№10
// let elem17 = document.querySelector('#elem17');
// let text4 = document.querySelector('#text4');
// elem17.addEventListener("blur", func10);
// function func10() {
//     let number = elem17.value;
//     if (number.includes("3")) {
//         text4.textContent = "Число содержит цифру 3";
//     } else {
//         text4.textContent = "Число не содержит цифру 3";
//     }
// }

// //№11
// let text5 = document.getElementsByTagName("p");
// let button3 = document.querySelector('#button3');
// button3.addEventListener("click", func11);
// function func11() {
//     for (let i = 0; i < text5.length; i++) {
//         text5[i].textContent += " " + (i + 1);
//     }
// }

// //№12
// let links = document.getElementsByTagName("a");
// let button4 = document.querySelector('#button4');
// button4.addEventListener("click", func12);
// function func12() {
//     for (let i = 0; i < links.length; i++) {
//         links[i].textContent += " (" + links[i].href + ")";
//     }
// }

// //№13
// let links1 = document.getElementsByTagName("a");
// let button5 = document.querySelector('#button5');
// button5.addEventListener("click", func13); 
// function func13() {
//     for (let i = 0; i < links1.length; i++) {
//         if (links1[i].href.startsWith("http://")) {
//             links1[i].textContent += " →";
//         }
//     }
// }

// //№14
// let text6 = document.querySelector("#text6");
// let text7 = document.querySelector("#text7");
// let text8 = document.querySelector("#text8");
// text6.addEventListener("click", func14);
// function func14() {
//     let square = parseInt(text6.textContent) ** 2;
//     text6.textContent = square;
// }
// text7.addEventListener("click", func15);
// function func15() {
//     let square = parseInt(text7.textContent) ** 2;
//     text7.textContent = square;
// }
// text8.addEventListener("click", func16);
// function func16() {
//     let square = parseInt(text8.textContent) ** 2;
//     text8.textContent = square;
// }

// //№15
// let elem18 = document.querySelector('#elem18');
// let text9 = document.querySelector('#text9');
// elem18.addEventListener("blur", func17);
// function func17() {
//     let date = elem18.value;
//     let dayOfWeek = getDayOfWeek(date);
//     text9.textContent = dayOfWeek;
// }
// function getDayOfWeek(dateString) {
//     let dateParts = dateString.split(".");
//     let day = parseInt(dateParts[0]);
//     let month = parseInt(dateParts[1]) - 1;
//     let year = parseInt(dateParts[2]);
//     let date = new Date(year, month, day);
//     let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     return daysOfWeek[date.getDay()];
// }

// //№16
// let elem19 = document.querySelector('#elem19');
// let button6 = document.querySelector('#button6');
// let button7 = document.querySelector('#button7');
// button6.addEventListener("click", func18);
// function func18() {
//     let currentValue = parseInt(elem19.value);
//     elem19.value = currentValue + 1;
// }
// button7.addEventListener("click", func19);
// function func19() {
//     let currentValue = parseInt(elem19.value);
//     if (currentValue > 0) {
//         elem19.value = currentValue - 1;
//     }
// }

// //№17
// let elem20 = document.querySelector('#elem20');
// let paragraphs = document.getElementsByTagName("p");
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].addEventListener("click", func20);
//     function func20() {
//         let currentValue = parseInt(elem20.value);
//         elem20.value = currentValue + 1;
//     }
// }

// //№18
// let elements = document.getElementsByTagName("div");
// for (let i = 0; i < elements.length; i++) {
//     let elem = elements[i];
//     let text = elem.innerHTML;
//     if (text.length > 10) {
//         text = text.substring(0, 10) + "...";
//     }
//     elem.innerHTML = text;
// }

// //№19
// function func21() {
//     let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let randomString = "";
//     for (let i = 0; i < 8; i++) {
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         randomString += characters.charAt(randomIndex);
//     }
//     document.querySelector('#elem21').value = randomString;
// }

// //№20
// function func22() {
//     let input = document.querySelector('#elem22');
//     let string = input.value;
//     let shuffledString = func23(string);
// input.value = shuffledString;
// }
// function func23(string) {
//     let characters = string.split("");
//     for (let i = characters.length - 1; i > 0; i--) {
//         let randomIndex = Math.floor(Math.random() * (i + 1));
//         let temp = characters[i];
//         characters[i] = characters[randomIndex];
//         characters[randomIndex] = temp;
//     }
//     return characters.join("");
// }

// //№21
// function convertToCelsius() {
//     let elem23 = document.querySelector('#elem23');
//     let result = document.querySelector('#text10');
//     let fahrenheit = parseFloat(elem23.value);
//     let celsius = (fahrenheit - 32) * 5/9;
//     result.textContent = text10.innerHTML + celsius.toFixed(2);
// }

// //№22
// function calculateFactorial() {
//     let elem24 = document.querySelector('#elem24');
//     let text11 = document.querySelector('#text11');
//     let number = parseInt(elem24.value);
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial *= i;
//     }
//     text11.textContent = text11.innerHTML + factorial;
// }

//№23
function calculateSquareRoots() {
    let elem25 = document.querySelector('#elem25');
    let elem26 = document.querySelector('#elem26');
    let elem27 = document.querySelector('#elem27');
    let text12 = document.querySelector('#text12');
    let a = parseInt(elem25.value);
    let b = parseInt(elem26.value);
    let c = parseInt(elem27.value);
    let discriminant = Math.pow(b, 2) - (4 * a * c);
    if (discriminant > 0) {
        let squareroot1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let squareroot2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.textContent = "Roots: " + squareroot1 + ", " + squareroot2;
    } else if (discriminant === 0) {
        let squareroot = -b / (2 * a);
        text12.textContent = text12.innerHTML + squareroot;
    } else {
        text12.textContent = "Невозможно высчитать.";
    }
}