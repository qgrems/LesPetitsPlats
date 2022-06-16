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
        for(let j in menu)
        {
            tabUstensiles[menu.ustensils] = menu.ustensils
        }
        for(let j in menu)
        {
            tabAppareils[menu.appliance] = menu.appliance
        }

    });
    return {tabIngredients,tabAppareils,tabUstensiles}
}

