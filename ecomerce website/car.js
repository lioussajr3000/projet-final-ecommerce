let logo_pannier = document.getElementById('logo-pannier')
let crad = document.getElementById('card')
let croix = document.getElementById('croix') 
let parent_img = document.getElementsByClassName('car-element')



// pour activer et desactiver le pannier


logo_pannier.onclick=()=>{

  crad.classList.add('activ')
}

croix.onclick=()=>{
  crad.classList.remove("activ")
}

// ?pour supprimer des Element dans le panier

if (document.readyState=="loading") {
  document.addEventListener("DOMContentLoaded" , ready);
}else{
  ready();
}


// creyon la fonction ready
function ready(){

 // suprimer les element du pannier
 var removeCartButtons = document.getElementsByClassName('poubel')
 // console.log( removeCartButtons)
 for (var i=0 ; i<removeCartButtons.length; i++){
   var button =removeCartButtons[i]
   button.addEventListener('click' , removeCartItem);
   totalprix();
  }

}

  






function removeCartItem (event){
 var buttonClicked = event.target
buttonClicked.parentElement.remove('car-element');
 
 calculerTotalPanier();
  

 
 
 
}

var  button_plus=document.getElementById('plus');

button_plus.onclick=()=>{
  document.getElementById('quantite').value= parseInt(document.getElementById('quantite').value)+1;
  totalprix();

}



var button_moins=document.getElementById('moins')
button_moins.addEventListener('click',soustraction);

function soustraction(){
  if(document.getElementById('quantite').value>=1){
    document.getElementById('quantite').value= parseInt(document.getElementById('quantite').value)-1;
    totalprix();
  }

  
    
 
    
  

}


function totalprix(){
  var prix=parseInt(document.getElementById('prix_des_produit').innerText)
  var quantite=parseInt(document.getElementById('quantite').value)
  var total= prix* quantite
  document.getElementById('prix-total').innerText=total+"FCFA"
}



