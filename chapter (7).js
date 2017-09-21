{
  function test(x, y = 'world'){
    console.log('默认值',x,y);
  }
  test('hello');//默认值 hello world
  test('hello','kill');//默认值 hello kill
}

{
  let x='test';
  function test2(x,y=x){
    console.log('作用域',x,y);
  }
  test2('kill');//作用域 kill kill
}

{
  function test3(...arg){
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
}

{
  console.log(...[1,2,4]); //1 2 4
  console.log('a',...[1,2,4]); //a 1 2 4
}

{
  let arrow = v => v*2;
  let arrow2 = () => 5;
  console.log('arrow',arrow(3)); //arrow 6
  console.log(arrow2()); // 5

}

{
  function tail(x){
    console.log('tail',x);   //tail 123
  }
  function fx(x){
    return tail(x)
  }
  fx(123)  
}
