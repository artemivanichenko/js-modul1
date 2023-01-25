// отдельно 30 минут
// const minutes = 90;
// const hours = 90 / 60;
// const minutesValue = minutes % 60;
// console.log(hours);
// console.log(minutesValue);

// const number = prompt('age');
// console.log(number);

// const string = '24px';
// const number = Number.parseFloat(string);
// console.log(number);

// const num = 12.5;
// const number = Math.min(100, 5, - 6, Infinity);
// console.log(number);

// const num = 12.5;
// const number = Math.floor(100.78);
// const number1 = Math.ceil(100.28);
// const number2 = Math.round(100.28);
// console.log(number);
// console.log(number1);
// console.log(number2);
// const number3 = Math.random(100);
// console.log(number3);

// const num = Math.pow (5, 2);
// const num2 = 5 ** 2;
// console.log(num);
// console.log(num2);

// const num = Math.pow (5, 2);

// const num = Number(prompt(`write number`));
// const num2 = Number(prompt(`write number`));
// const result = num **num2;
// console.log(result);

// const min = 0;
// const max = 100;
// const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
// console.log(randomNumber);

// const num = 50.21812213.toFixed(3);
// console.log(num);

// console.log((Math.floor(50.554433 * 100) / 10));

// const min = Number(prompt(`write number`));
// const max = Number(prompt(`write number`));
// const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
// console.log(randomNumber);

// const string1 = `Go`;
// const string2 = `IT`;
// const result = string1 + " " + string2;
// const result2 = `${string1} + " " + ${string2} ${77+88}`;
// console.log(result);
// console.log(result2);

// const name = (prompt(`write number`));
// const num2 = Number(prompt(`write number`));
// const result = `Hello ${name.toUpperCase()} and ${num2}`;
// console.log(result);

// const string = `Hello!`;
// const modifiedString = string.endsWith(`!`);
// const modifiedString2 = string.endsWith(`?`);
// console.log(modifiedString);
// console.log(modifiedString2);

// const string = `Hello! Hello?`;
// console.log(string[4]);
// console.log(string.length);
// console.log(string[string.length - 1]);
// const string2 = string.slice(0, 4);
// console.log(string2);

// const string = `Hello! to Hello? Index`;
// const string2 = string.indexOf(`In`);
// console.log(string2);

// const name = (prompt(`write more number`));
// console.log(name.length);

// const mail = (prompt(`write more number`));
// console.log(mail.toLowerCase());

// const string = `Hello! to Hello? Index`;
// const string2 = string.includes(`In`);
// console.log(string2);
// const index = string.indexOf(`In`);
// console.log(index);

// const time = '12:22';
// console.log(time.replaceAll(':','!'));

// const string = `Hello! to Hello? Index`;
// console.log(string.slice(0,11));

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     const totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice => customerCredits) {
//       message = "Insufficient funds!";
//     } else {
//       message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//     }
//       // Change code above this line
//     return message;
//   }

// const number = Number(prompt(`Enter`));

// const userBrowser = navigator.userAgent;
// console.log(userBrowser);

// if (userBrowser.includes('Chrome') ||
// userBrowser.includes('Chrome')||
// userBrowser.includes('Chrome')){
//     console.log('yes')
// }

// const number = Number(prompt(`Enter`));

// switch (number){
//     case 1: {
//         console.log(`number 1`);
//         break
//     }
//     case 5: {
//         console.log(`number 5`);
//         break
//     }
//     default:
//         console.log(`No have this number`);
//         break
// }

// const num = Number(prompt(`Enter`));
// switch (num) {
//   case 0:
//     alert("o");
//     break;
//   case 1:
//     alert("1");
//     break;
//   case 2:
//     alert("2");
//     break;
//   case 3:
//     alert("3");
//     break;
//   default:
//     alert("defualt");
//     break;
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   // if (ordered > available) {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = ;
//   // }
//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";

//   // Change code above this line
//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
  // Change code below this line
  // if (password === null) {
  //   message = "Canceled by user!";
  // } else if (password === ADMIN_PASSWORD) {
  //   message = "Welcome!";
  // } else {
  //   message = "Access denied, wrong password!";
  // }


//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//     default:
//       message = "Access denied, wrong password!";
//   }
//   // Change code above this line
//   return message;
// }
// checkPassword();

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
if (message >= maxLength) {
  result = message;
} else (message < maxLength) {
  result = message.maxlength;
}
  /// Change code above this line
  return result;
}