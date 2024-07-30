async function a(){
    await b();
   setTimeout(()=>
    {    
        console.log("ABC")},1000);
}

 function b(){
    console.log("BCD");
}

function c(){
    console.log("CDE");
}
 a()
b()
c()