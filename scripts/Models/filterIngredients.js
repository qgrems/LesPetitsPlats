class IngredientsTags
{
    constructor(tabIngredients)
    {
        this._ingredients = tabIngredients

    }
    get ingredients()
    {
        return this._ingredients
    }



    rendertags()
    {
        let ingredients=""

        let tab=[]
        let index = 0
        for (let i in this._ingredients)
        {
            index++
            ingredients += `<li  class="positionfiltercomposants ingredient" tabindex="${index}" onClick ='app.ajouFiltreActif("ingredients","${this.ingredients[i]}","${index}")'>${this.ingredients[i]}</li>`
              
        }


        const p = document.createElement('section');
        p.classList.add("card_filters")
            p.innerHTML = `
                ${ingredients}
            `
            return p
    }



} 