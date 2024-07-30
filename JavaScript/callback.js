//callback
// function formValidation(){
//     console.log("Form validation called");
//     formValidationcompleted()
// }
// function formValidationcompleted(){
//     console.log("Form Validation ompleted");
// }
// formValidation()

//modify the code 

function formValidation(){
    setTimeout(
        ()=>{
            console.log("Form validation called");
            formValidationcompleted();
        },2000);
    
}
function formValidationcompleted(){
    console.log("Form Validation ompleted");
}
formValidation();
/// function with 
function formValidation(){
    setTimeout(
        ()=>{
            console.log("Form validation called");
            formValidationcompleted();
        },2000);
    
}
function formValidationcompleted(){
    console.log("Form Validation ompleted");
}
formValidation();