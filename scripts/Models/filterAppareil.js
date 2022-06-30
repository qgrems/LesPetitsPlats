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

        for (let i in this._appliance)
        {
                appliance += `<li class="positionfiltercomposants ingredient" tabindex="${this.appareil}" onclick ='app.ajouFiltreActif("appliance","${this.appliance[i]}")'>${this.appliance[i]}</li>`
        }


        const p = document.createElement('p');
        p.classList.add("card_filter")
            p.innerHTML = `
                <p>${appliance}</p>
            `
            return p
    }



} 