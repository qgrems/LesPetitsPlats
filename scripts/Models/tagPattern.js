class Tags
{
    constructor(type,value)
    {  
        this._value= value
        this._type = type
    }

    get value()
    {
        return this._value
    }
    get type()
    {
        return this._type
    }


    renderTags()
    {
        let tagFilter=""
        console.log(this.value)
        console.log(this.type)
        if(this._type === 'ingredients')
        {
            tagFilter =`<div class="tagButtonIngredients"><div class="sizetexttags"><p class="tagText">${this.value}</p></div><i class="far fa-times-circle quittags" onclick=closeTags()></i></div>`
        }
        if(this.type ==='appliance')
        {
            tagFilter = `<div class="tagButtonAppliance"><div class="sizetexttags"><p class="tagText">${this.value}</p> </div><i class="far fa-times-circle quittags" onclick=closeTags()></i></div>`
        }
        if(this.type ==='ustensils')
        {
            tagFilter = `<div class="tagButtonUstensils"><div class="sizetexttags"><p class="tagText">${this.value}</p></div> <i class="far fa-times-circle quittags" onclick=closeTags()></i></div>`
            
        }
        const article = document.createElement('div');
        article.classList.add("tagButton")
        article.innerHTML = `
          ${tagFilter}
         
        `
        return article
    }
}