function closeTags(value)
{
    let node = document.getElementById("tags").getElementsByTagName('div')
    let buttonquit=document.querySelector(".tagButton")
    buttonquit.remove(value)
}

let indexNumber = 0
function tabIndex(tabMedia) {
  let i
  for(i = 0; i < tabMedia.length; i++) {
    indexNumber += 1
    return indexNumber
  }
}
