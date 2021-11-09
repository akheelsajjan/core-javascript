// const x = document.getElementById('main')
// const y = x.getElementsByTagName('p')

// let z = `<ul>
//     <li> ${y[0].innerHTML} </li>
// </ul>
// `

// document.getElementById('demo').innerHTML = z
// document.getElementsByTagName
// //form
// const form = document.forms['frm1'];
// var text = '';
// for(let i =0; i< form.length; i++){
//     text = text + form[i].value + "<br>"
// }

// document.getElementById('demo2').innerHTML = text

let button = document.getElementById('hide').innerHTML 

let x = document.getElementsByClassName('test')[0]
//appending html content
x.innerHTML = ' Hello'

//appending css
document.getElementsByClassName('test')[0].style.color = 'red';
document.getElementsByClassName('test')[0].style.fontSize = '90px'
document.getElementById('hide').innerHTML = 'HIDE'
document.getElementById('hide').addEventListener('click', hideFuncion) 

function hideFuncion(){
    var hidden=document.getElementsByClassName('test')[0].style.display
    var a;
    if(hidden === 'none'){
        a = 'block'
        document.getElementById('hide').innerHTML = 'Hide'
    }else{
        a = 'none'
        document.getElementById('hide').innerHTML = 'Display'
    }
    document.getElementsByClassName('test')[0].style.display = a
}