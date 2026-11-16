//Напишите функцию, которая находит самую длинную строку общего префикса среди массива строк. Если общего префикса нет, то вернуть пустую строку “”.
//Префикс - это сочетание из минимум 2-ух букв 

function longestCommonPart(strs) {
  if (!strs || strs.length === 0) {
    return "";
}

  let shortest = strs[0];
  for (let i = 1; i < strs.length; i++){
    if (strs[i].length < shortest.length) {
      shortest = strs[i];
    }
  }

  for (let len = shortest.length; len >= 2; len--) {
    for (let start = 0; start + len <= shortest.length; start++) {
        
      let part = shortest.slice(start, start + len);
      let foundInAll = true;
      for (let i = 0; i < strs.length; i++) {
        if (!strs[i].includes(part)) {
          foundInAll = false;
          break;
        }
      }
      if (foundInAll) {
        return part;
      }
    }
  }
  return "";
}

console.log(longestCommonPart(["цветок", "поток", "хлопок"]));
console.log(longestCommonPart(["собака", "гоночная машина", "машина"])); 
console.log(longestCommonPart(["перекресток", "кресло", "воскресенье"]));