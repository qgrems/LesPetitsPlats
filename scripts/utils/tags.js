function closeTagsIngredients(index)
{
  console.log(index)
    let buttonquit=document.querySelector(".tagButton")
    buttonquit.remove()
}
function closeTagsAppareils(index)
{
  console.log(index)
  const buttonquit=document.querySelector(".tagButton")
  buttonquit.remove()
}
function closeTagsUstensils(index)
{
  let buttonquit=document.querySelector(".tagButton")
  buttonquit.remove()
}
let indexNumber = 0

function tabIndex(tabMedia) {
  let i      
  let indexNumber =0
  for(i = 0; i < tabMedia.length; i++) {
    indexNumber += 1
  }
}
