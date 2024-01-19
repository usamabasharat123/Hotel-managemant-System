const name = document.getElementById('Name');
const email = document.getElementById('Email');
const number = document.getElementById('Phone');
let validname = false;
let validemail = false;
let validnumber = false;

name.addEventListener('blur',()=>{
    console.log('name is blurred')
    //Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str=name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('It is matched');
        name.classList.remove('is-invalid');
        validname=true;
    }
    else{
        console.log('It is not matched');
        name.classList.add('is-invalid');
        validname=false;
    }

})

email.addEventListener('blur',()=>{
    console.log('email is blurred')
    //Validate email here
    let regex2 = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,10}$/;
    let str2=email.value;
    console.log(regex2,str2);
    if(regex2.test(str2)){
        console.log('It is matched');
        email.classList.remove('is-invalid');
        validemail=true;
    }
    else{
        console.log('It is not matched');
        email.classList.add('is-invalid');
        validemail=false;
    }
})

number.addEventListener('blur',()=>{
    console.log('number is blurred')
    //Validate number here
    let regex3 = /^[0-9]([0-9]){2,15}$/;
    let str3=number.value;
    console.log(regex3,str3);
    if(regex3.test(str3)){
        console.log('It is matched');
        number.classList.remove('is-invalid');
        validnumber=true;
    }
    else{
        console.log('It is not matched');
        number.classList.add('is-invalid');
        validnumber=false;
    }
})

const submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('You have clicked the submit button');
    if(validemail && validname && validnumber){
    console.log('All the information is valid.So your request is submitted successfully.');
    alert('Your request for room reservation is submitted successfully.')
    /*let success = document.getElementById('success');
    success.classList.add('show');
    let failure = document.getElementById('failure');
    failure.classList.remove('show');*/
    }
    else{
    console.log('There are some errors in your form.Correct and Try Again');
    alert('There are some errors in your form.Correct and Try Again !')
    /*let failure = document.getElementById('failure');
    failure.classList.add('show');
    let success = document.getElementById('success');
    success.classList.remove('show');*/
    }
})

