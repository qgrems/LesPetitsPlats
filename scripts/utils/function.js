function actualisationSelectBox(menuRestant)
{
    let tabIngredients={}
    let tabAppareils = {}
    let tabUstensiles = {}

    menuRestant.forEach(menu => {
        for(let j in menu.ingredients)
        {

                tabIngredients[menu.ingredients[j].ingredient] = menu.ingredients[j].ingredient

        }
        for(let j in menu.ustensils)
        {
            tabUstensiles[menu.ustensils[j]] = menu.ustensils[j]
        }
        
            tabAppareils[menu.appliance] = menu.appliance
        

    });
    return {tabIngredients,tabAppareils,tabUstensiles}
}

//function triage


