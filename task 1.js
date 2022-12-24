// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, 
// но и, например, знаки, null и так далее.

let array = [0, 1, 2, 3, 4, 5, 6, "string", null];
const evenOddFunction = (array) => { 
  let even = 0;
  let odd = 0;
  let other = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 || typeof(array[i]) !== "number" || typeof(array[i]) == null || (isNaN(array[i]))) {
      other++;
    } else { 
      if (array[i] % 2 === 0) {
        even ++;
      } else {
        odd++;
      }
    }
  }
  console.log("Количество четных чисел равно " + even);
  console.log("Количество нечетных чисел равно " + odd);
  console.log("Количество других элементов ранво " + other);
}
 //вызов функции
evenOddFunction(array) 

