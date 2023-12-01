var btn=document.getElementById('se')
let form11=document.getElementById('form11')
let form=document.getElementById('e')
var seconecter=document.getElementById('i')
var pourgreen=document.getElementById('pourgreen')


btn.addEventListener('click', ()=> {
  
  form.classList.add('non-visible')
    
  form11.classList.remove('non-visible')
  form11.classList.add('trasition')
  
});

seconecter.addEventListener('click',()=>{
  pourgreen.classList.remove('non-visible')
  pourgreen.removeAttribute('id')
  pourgreen.classList.add('green')
  form.classList.add('non-visible')
  form.style.display='none'
  

})
