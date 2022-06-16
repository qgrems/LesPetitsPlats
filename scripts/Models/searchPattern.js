class Search
{
    constructor(tabIngredients,tabAppareils,tabUstensiles)
    {
        this._ingredients = tabIngredients
        this._appliance = tabAppareils
        this._ustensils =tabUstensiles
    }
    get ingredients()
    {
        return this._ingredients
    }
    get appliance()
    {
        return this._appliance
    }
    get ustensils()
    {
        return this._ustensils
    }


    renderSearch()
    {
        let ingredients=""
        let appliance=""
        let ustensils=""
        let tab=[]

        for (let i in this._ingredients)
        {
                ingredients += `<li  class="positionfiltercomposants ingredient"  onClick ='app.ajouFiltreActif("ingredients","${this.ingredients[i]}")'>${this.ingredients[i]}</li>`
                
        }
        for (let i in this._appliance)
        {
                appliance += `<li class="positionfiltercomposants appliance" onClick ='app.ajouFiltreActif("appliance","${this.appliance[i]}")'>${this.appliance[i]}</li>`
        }
        for (let i in this._ustensils)
        {
            ustensils += `<li class="positionfiltercomposants ustensil" onClick ='app.ajouFiltreActif("ustensils","${this.ustensils[i]}")'>${this.ustensils[i]}</li>`
        }
        
    const article = document.createElement('section');
    article.classList.add("card_filter")
        article.innerHTML = `
        <div class="ingredients" >
            <div class="ingredientsIcon">
                <input id="ingredients" type="text" placeholder="Ingredients" onclick=launchModalIngredients()></input>
            <div class="arrow"><p id="arrowIngredients"><i class="fas fa-chevron-down"></i></p></div>
            </div>
            <ul  class="modalFilterIngredients">${ingredients}</ul>
        </div>
        
        <div class="appareils">
            <div class="ingredientsIcon">
                <input id="appareils" type="text" placeholder="Appareils" onclick=launchModalAppareils()></input>
                <div class="arrow"><p id="arrowAppareils"><i class="fas fa-chevron-down"></i></p></div>
            </div>
            <ul class="modalFilterAppareils">${appliance}</ul>
        </div>

        <div class="ustensiles">
            <div class="ingredientsIcon">
                <input id="ustensiles" type="text" placeholder="Ustensiles" onclick=launchModalUstensils()></input>
                <div class="arrow"><p id="arrowUstensils"><i class="fas fa-chevron-down"></i></p></div>
            </div>
            <ul class="modalFilterUstensiles">${ustensils}</ul>
        </div>
        `
        return article
    }



} 