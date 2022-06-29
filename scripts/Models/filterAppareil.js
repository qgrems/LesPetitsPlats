class AppareilsTags
{
    constructor(tabAppliance)
    {
        this._appliance = tabAppliance

    }

    get appliance()
    {
        return this._appliance
    }



    rendertags()
    {
        let appliance=""
        let tab=[]

        for (let i in this._appliance)
        {
                appliance += `<li class="positionfiltercomposants ingredient" onclick ='app.ajouFiltreActif("appliance","${this.appliance[i]}")'>${this.appliance[i]}</li>`
        }


        const p = document.createElement('p');
        p.classList.add("card_filter")
            p.innerHTML = `
                <p>${appliance}</p>
            `
            return p
    }



} 