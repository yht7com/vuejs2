var name = '小明';

var flag = true;

function sum(num1 , num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(10, 20));
}
// 导出方式1
export {
  sum , flag
}

// 第二种导出方式--定义直接导出 变量 方法  类都可以

export var age = 18;

export function sum2(num1) {
  return num1;
}

export class Person {
  run(){
    console.log('小明在跑');
  }
}

// 第三种  export default 一个模块只能有一个default

export default function (num1) {
  return num1;
}
