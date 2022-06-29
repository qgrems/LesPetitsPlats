function closeTags(value)
{
    let node = document.getElementById("tags").getElementsByTagName('div')
    let buttonquit=document.querySelector(".tagButton")
    buttonquit.remove(value)
}
