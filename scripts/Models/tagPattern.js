class Tags
{
    constructor(type,value)
    {  
        this._value= value
        this._type = type
        console.log(this._type)
        console.log(this._value)
    }

    get value()
    {
        return this._value
    }
    get type()
    {
        return this.type
    }


    renderTags()
    {

        let ingredient=""
        let appliance=""
        let ustensils=""
        if(this._type === 'ingredients')
        {
            ingredient =`<p>ingredient</p>`
        }
        if(this.type ==='appliance')
        {
            appliance = `<p>appliance</p>`
        }
        if(this.type ==="ustensils")
        {
            ustensils = `<p>ustensils</p>`
        }
        const article = document.createElement('section');
        article.innerHTML = `
        <div>
           ${appliance}
        </div>
        
        `
    }
}