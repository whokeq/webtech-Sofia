//Напишите функцию, которая принимает массив целый чисел nums и=
// целое число target и возвращает индексы двух чисел так, чтобы они составляли в сумме target

function TargetSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
const nums =[2,8,11,7];
const target = 13;
const result = TargetSum(nums, target); 
console.log(result);