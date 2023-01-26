const bar =document.getElementById('bar');       //affecting 'bar' the element in HTML with the id "bar"
const close =document.getElementById('close');
const nav =document.getElementById('navbar');

if (bar){
    bar.addEventListener('click' , () =>{
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click' , () =>{
        nav.classList.remove('active');
    })
}