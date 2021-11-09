function validateForm(e){
    let x = document.forms['myForm']['fname'].value
    if(typeof x != Number){
        alert('Only Numbers are allowed')
    }else{
        alert('GREAT')
    }
}




