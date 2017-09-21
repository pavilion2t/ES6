{
  console.log('B',0B111110111);//B 503  二进制表示以0B开头
  console.log(0o767);//503  八进制0o开头
}

{
  console.log('15',Number.isFinite(15)); //函数用于检查其参数是否是无穷大  15 true
  console.log('NaN',Number.isFinite(NaN));//NaN false 
  console.log('1/0',Number.isFinite('true'/0));//1/0 false
  console.log('NaN',Number.isNaN(NaN));//NaN true
  console.log('0',Number.isNaN(0));//0 false

}

{
  console.log('25',Number.isInteger(25));//true
  console.log('25.0',Number.isInteger(25.0));//true
  console.log('25.1',Number.isInteger(25.1));//false
  console.log('25.1',Number.isInteger('25'));//false
}

{
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);//9007199254740991 -9007199254740991
  console.log('10',Number.isSafeInteger(10));//true
  console.log('a',Number.isSafeInteger('a'));//false
}

{
  console.log(4.1,Math.trunc(4.1));//4.1  4
  console.log(4.9,Math.trunc(4.9));//4.9  4
}

{   //sign函数返回一个数字的符号, 指示数字是正数，负数还是零
  //分别是 1, -1, 0, -0, NaN. 代表的各是正数, 负数, 正零, 负零, NaN
  console.log('-5',Math.sign(-5));
  console.log('0',Math.sign(0));
  console.log('5',Math.sign(5));
  console.log('50',Math.sign('50'));
  console.log('foo',Math.sign('foo'));
}


{//函数返回任意数字的立方根
  console.log('-1',Math.cbrt(-1));
  console.log('8',Math.cbrt(8));
}
