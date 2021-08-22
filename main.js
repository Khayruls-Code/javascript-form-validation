let form = document.querySelector('form');
let input = document.querySelectorAll('form input')
console.log(input)
form.addEventListener('submit', function(e){
    e.preventDefault;
    input.forEach(ele => {
        if(!ele.value){
            ele.parentNode.classList.add('error')
        }else{
            ele.parentNode.classList.remove('error')
            if(ele.id == 'email'){
                if(validateEmail(ele.value)){
                    ele.parentNode.classList.remove('error')
                }else{
                    ele.parentNode.classList.add('error')
                }
            }
        }
    })
})


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}