function okok(tabIngredients,tabAppareils,tabUstensiles)
{
    
    let ingredients=""
    let appliance=""
    let ustensils=""
    let tab=[]

    for (let i in tabIngredients)
    {
            ingredients += tabIngredients[i]
    }
    for (let i in tabAppareils)
    {
            appliance += tabAppareils[i]
    }
    for (let i in tabUstensiles)
    {
        ustensils += tabUstensiles[i]
    }
    for (let i=0;i<document.querySelectorAll(".ingredient").length-1;i++)
    {
        document.querySelectorAll(".ingredient")[i].addEventListener('click',(ingredients)=>{
            console.log( tabIngredients)
        })
    }
}