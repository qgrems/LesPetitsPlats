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

        for (let i in this._ingredients)
        {
                ingredients += `<li  class="positionfiltercomposants ingredient"  onClick ='app.ajouFiltreActif("ingredients","${this.ingredients[i]}")'>${this.ingredients[i]}</li>`
              
        }


        const p = document.createElement('p');
        p.classList.add("card_filter")
            p.innerHTML = `
                ${ingredients}
            `
            return p
    }



} 