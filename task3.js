//Напишите функцию spinWords, которая принимает строку из одного или нескольких слов и возвращает ту же строку,
// но с перевернутыми словами из пяти или более букв.

function spinWords(pred)
{
    const words = pred.split(' ');
    const processedWords = words.map (word => 
    {
        if (word.length >= 5) {
            return word.split('').reverse().join('');
        }
        return word;
    });
    return processedWords.join(' ');
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test
