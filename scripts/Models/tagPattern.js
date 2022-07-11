class Tags
{
    constructor(type,value,index)
    {  
        this._value= value
        this._type = type
        this._index = index
    }

    get value()
    {
        return this._value
    }
    get type()
    {
        return this._type
    }
    get index()
    {
        return this._index
    }

    renderTags()
    {     
        let tagFilter=""
        if(this._type === 'ingredients')
        {
            tagFilter =`<div class="tagButtonIngredients"><div class="sizetexttags"><p class="tagText">${this.value}</p></div><i class="far fa-times-circle quittags" onclick=closeTagsIngredients("${this.index}")></i></div>`
        }
        if(this.type ==='appliance')
        {
            tagFilter = `<div class="tagButtonAppliance ${this.index}"><div class="sizetexttags"><p class="tagText">${this.value}</p> </div><i class="far fa-times-circle quittags" onclick=closeTagsAppareils("${this.index}")></i></div>`
        }
        if(this.type ==='ustensils')
        {
            tagFilter = `<div class="tagButtonUstensils"><div class="sizetexttags"><p class="tagText">${this.value}</p></div> <i class="far fa-times-circle quittags" onclick=closeTagsUstensils("${this.index}")></i></div>`
            
        }
        const article = document.createElement('div');
        article.classList.add("tagButton")
        article.innerHTML = `
          ${tagFilter}
        `
        return article
    }
}