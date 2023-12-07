const form = document.getElementById('form');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const re_password = document.getElementById('re_password');

function error(input,message){
    input.className='form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input){
    input.className='form-control is-valid';
}

const validateEmail = (input) => {
    
      const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(re.test(input.value)){
        success(input);
      }else{
        error(input, 'Geçerli Bir Mail Adresi Giriniz.');
      }
  };

  function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input,"Boş Geçilemez");
        }else{
            success(input);
        }
    })
    
  }
  
  function checkLength(input,min,max){
    if(input.value.length < min){
        error(input, `${input.id == "username" ? 'Kullanıcı Adı' : input.id == "password" && "Şifre"} en az ${min} karakter olmalıdır.`);
    }else if (input.value.length > max){
        error(input, `${input.id == "username" ? 'Kullanıcı Adı' : input.id == "password" && "Şifre"} en fazla ${max} karakter olmalıdır.`);
    }else{
        success(input);
    }
  }
  
  function checkPasswords(input1,input2){
    if(input1.value == input2.value){
        success(input);
    }else{
        error(input2, "Girilen Şifreler eşleşmiyor.");
    }
  }
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,re_password]);
    validateEmail(email);
    
    checkLength(username,6,8);
    checkLength(password,6,8);

    checkPasswords(password,re_password);
})

