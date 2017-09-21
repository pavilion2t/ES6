function test(){
  let a=1;
  console.log(a);
}
test();


function test(){
  for(var i=1;i<3;i++){
    console.log(i);
  }
  console.log(i);
  let a = 1;
}

function test(){
  for(let i=1;i<3;i++){
    console.log(i);
  }
  console.log(i);
  let a = 1;
}

function last(){
  const PI=3.1415926;
  const k={
    a:1
  }
  k.b=3;
  console.log(PI,k);
}
last();
