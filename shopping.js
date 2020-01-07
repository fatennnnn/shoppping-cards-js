


    let addQuantity = document.getElementsByClassName("feather-plus-circle");
    let subQuantity = document.getElementsByClassName("feather-minus-circle");
    let removecart =document.getElementsByClassName("feather-x-square")
    let heartname =document.getElementsByClassName("feather-heart")
    for (let i = 0; i < addQuantity.length; i++) {
    addQuantity[i].addEventListener("click", function (e) {
    //let tab_label = document.getElementsByClassName("plus-moin");
           // let current_quantity = tab_label[i].innerHTML;
           let current_quantity = e.currentTarget.parentElement.children[1];
           console.log(current_quantity)
            //tab_label[i].textContent =Number.parseInt(current_quantity) + 1;
            current_quantity.textContent=Number.parseInt(current_quantity.innerHTML)+1;

               // document.getElementsByClassName("plus-moin")[i].textContent =Number.parseInt(current_quantity) + 1
               updateTotale()
        });
    }



    for (let i = 0; i <subQuantity.length; i++) {
        subQuantity[i].addEventListener("click", function (e) {
            //let tab_label = document.getElementsByClassName("plus-moin");
            //let current_quantity = tab_label[i].innerHTML;
            //   document.getElementsByTagName("label")[i].textContent =
            let current_quantity = e.currentTarget.parentElement.children[1];
            console.log(current_quantity)

            if ((current_quantity.innerHTML)>0)
            
            current_quantity.textContent =
                Number.parseInt(current_quantity.innerHTML) - 1
                // document.getElementsByClassName("plus-moin")[i].textContent =Number.parseInt(current_quantity) - 1
           


                updateTotale();
        });
    }
    // let shoppingCart=document.getElementsByClassName(".showcart")
    // let xsquare=document.getElementsByClassName(".feather-x-square")
    
    
    // shoppingCart.on("click", ".feather-x-square", function(e) {
    //     shoppingCart.removeItemFromCartAll(".row");
    //   })
    
   //console.log(removecart)
  for(let i=0; i<removecart.length; i++ ){
      let btnremove = removecart[i];
      btnremove.addEventListener("click",function(e){
          let btnremoveclicked =e.currentTarget
          btnremoveclicked.parentElement.parentElement.remove()
          updateTotale()
      })
  }
  
  for(let i=0; i<heartname.length; i++ ){
      let btnheart =heartname[i]
      btnheart.addEventListener("click",function(e){
          e.currentTarget.classList.toggle("heartfaten")
      })
  }


  function updateTotale(){
      let cartItemcontainer =document.getElementsByClassName("cart-items")[0]
      let cartRows =cartItemcontainer.getElementsByClassName("cart-row")
      let total=0
      for(let i=0; i<cartRows.length; i++ ){
        let cartRow=cartRows[i]
        let priceElement=cartRow.getElementsByClassName("cart-price")[0]
        let quantite =cartRow.getElementsByClassName("plus-moin")[0]
//console.log(priceElement, quantite)
let price=parseFloat(priceElement.innerText.replace('$',''))
let quantitee=parseFloat(quantite.innerText);
total= total+price*quantitee
console.log(total)
  
}
document.getElementsByClassName("somme")[0].innerHTML=total +"$"
  }
      