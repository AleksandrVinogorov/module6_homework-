// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно 
// простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. 
// Обратите внимание на числа 0 и 1.

let isSimpleNumber = (num) => { 
  if (num < 2 || num > 1000) {
        return "is not correct!";
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return false;
            } else {return true;}
        }
    }
}

console.log(isSimpleNumber(1001));
console.log(isSimpleNumber(53)); 
