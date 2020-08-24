//1、引入-- 统一引入
import { sum , age , sum2 , Person } from  './test30-1.js'

var name = '小红';

var flag = true;


if (flag) {
  console.log( name + "的年龄是：" + age );
  console.log('sum2方法的值：' + sum2(55));

}

console.log(sum(20, 30));

const p = new Person();
p.run();


// 接收export default 默认值，一个模块只能有一个default
import addr from './test30-1.js'

console.log(addr('60'));

// 2、 第二种导入方式 表示全部导入

import * as arr from './test30-1.js';

console.log('* 的导入方式，' + arr.age);
