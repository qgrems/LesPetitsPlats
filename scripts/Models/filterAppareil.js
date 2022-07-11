class AppareilsTags
{
    constructor(tabAppliance,tabAppareil)
    {
        this._appliance = tabAppliance
        this._appareil= tabAppareil
    }

    get appliance()
    {
        return this._appliance
    }
    get appareil()
    {
        return this._appareil
    }
  
    rendertags()
    {
        let appliance=""
        let tab=[]
        let index = 0

        for (let i in this._appliance)
        {
            index++
            appliance += `<li class="positionfiltercomposants ingredient" tabindex="${index}" onclick ='app.ajouFiltreActif("appliance","${this.appliance[i]}","${index}")'>${this.appliance[i]}</li>`
        }


        const p = document.createElement('p');
        p.classList.add("card_filter")
            p.innerHTML = `
                <p>${appliance}</p>
            `
            return p
    }



} 