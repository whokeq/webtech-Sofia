//Написать функцию pickPropArray, которая принимает 2 аргумента - массив с объектами и свойство объекта.
// На выходе должен получиться массив со значениями объектов по заданному свойству, если такое свойство есть в этом объекте


function pickPropArray(array, prop) {
  const result = [];

  for (const obj of array)
    {
    if (obj[prop] !== undefined) 
        {
            result.push(obj[prop]);
        }
    }
  return result; 
}



const students = [
   { name: 'Павел', age: 20 },
   { name: 'Иван', age: 20 },
   { name: 'Эдем', age: 20 },
   { name: 'Денис', age: 20 },
   { name: 'Виктория', age: 20 },
   { age: 40 },
]

const result = pickPropArray(students, 'name')

console.log(result) 
// [ 'Павел', 'Иван', 'Эдем', 'Денис', 'Виктория' ]

