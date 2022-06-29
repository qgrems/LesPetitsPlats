class UstensilsTags
{
    constructor(tabUstensils)
    {
        this._ustensils = tabUstensils

    }

    get ustensils()
    {
        return this._ustensils
    }


    rendertags()
    {
        let ustensils=""
        let tab=[]

        for (let i in this.ustensils)
        {
            ustensils += `<li  class="positionfiltercomposants ingredient"  onClick ='app.ajouFiltreActif("ustensils","${this.ustensils[i]}")'>${this.ustensils[i]}</li>`
        }

        const p = document.createElement('p');
        p.classList.add("card_filter")
            p.innerHTML = `
                ${ustensils}
            `
            return p
    }



} 