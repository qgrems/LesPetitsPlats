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
        let index = 0
        for (let i in this.ustensils)
        {
            index++
            ustensils += `<li  class="positionfiltercomposants ingredient" tabindex="${index}" onClick ='app.ajouFiltreActif("ustensils","${this.ustensils[i]}","${index}")'>${this.ustensils[i]}</li>`
        }

        const p = document.createElement('p');
        p.classList.add("card_filter")
            p.innerHTML = `
                ${ustensils}
            `
            return p
    }



} 