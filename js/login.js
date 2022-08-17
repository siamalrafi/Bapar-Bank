document.getElementById('btn-submit').addEventListener('click', function(){
const emailFiled = document.getElementById('user-email')
const email = emailFiled.value;

const  passwordFiled = document.getElementById('user-password');
const password = passwordFiled.value;
console.log(password);

if(email == 'rana@gmail.com' && password == 'pass'){
    window.location.href = 'bank.html';

}
else{
    alert("Hello! I am an alert box!!");
}
})
