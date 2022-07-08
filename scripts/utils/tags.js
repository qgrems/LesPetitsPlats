function closeTagsIngredients(index)
{
  
    let buttonquit=document.querySelector(".tagButtonIngredients")
    buttonquit.remove()
}
function closeTagsAppareils(index)
{
  let buttonquit=document.querySelector(".tagButtonAppliance")
  buttonquit.remove()
}
function closeTagsUstensils(index)
{
  let buttonquit=document.querySelector(".tagButtonUstensils")
  buttonquit.remove(index)
}
let indexNumber = 0

function tabIndex(tabMedia) {
  let i      
  let indexNumber =0
  for(i = 0; i < tabMedia.length; i++) {
    indexNumber += 1
  }
}
