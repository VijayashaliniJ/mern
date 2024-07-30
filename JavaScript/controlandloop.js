// var email="shalini@gmail.com"
// var pwd="123456"
// var usertypingemail="shalini@gmail.com"
//  var usertypingpwd="12346"
// if(usertypingemail===email){
//     if(usertypingpwd===pwd){
//         console.log("Login Successful");
//     }
//     else{
//         console.log("Password is Invalid");
//     }
// }
// else{
//     console.log("user email is not in the db");
// }
// //sogn up code
// username="shalini";
// pwd="1234";
// cnfpwd="1234";
// if(username){
//     if(pwd){
//         if(cnfpwd){
//             if(pwd==cnfpwd){
//                 console.log("Signup Successful");
//             }
//             else{
//                 console.log("Password and confirm password does not match");
//             }
//         }
//         else{
//             console.log("Type your cnfpwd");
//         }
//     }
//     else{
//         console.log("Type your pwd");
//     }

// }
// else{
//     console.log("Type your username");
// }
//without arguments and without return type
// function evenodd(){
//     var a=1000;
//     if(a%2==0){
//         console.log("Even");
//     }
// }
// evenodd();

// function evenodd(){
//     var a=1000;
//     if(a%2==0){
//         return ("Even");
//     }
// }
// console.log(evenodd());

function evenodd(a){
    if(a%2==0){
        console.log("Even");
    }
    else{
        console.log("odd");
    }
}
evenodd(109);