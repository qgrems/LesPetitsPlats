function actualisationSelectBox(menuRestant)
{
    let tabIngredients={}
    let tabAppareils = {}
    let tabUstensiles = {}

    menuRestant.forEach(menu => {
        for(let j in menu.ingredients)
        {

                tabIngredients[menu.ingredients[j].ingredient] = menu.ingredients[j].ingredient

        }
        for(let j in menu.ustensils)
        {
            tabUstensiles[menu.ustensils[j]] = menu.ustensils[j]
        }
        
            tabAppareils[menu.appliance] = menu.appliance
        

    });
    return {tabIngredients,tabAppareils,tabUstensiles}
}


this.pageSection = document.querySelector(".page_section");
let FiltersIngredients
let filterIngredient
let filtersAppareils
let filterAppareil
let filtersUstensils
let filterUstensil

let tabIngredients={}
let tabAppareils = {}
let tabUstensiles = {}
let tableauingredient = {}

// triage des cards avec La recherche principale + triage des tags en fonction de la recherche principale
function triageResearch(menuData,pageSection,tagIngredients,tagAppareil,tagsUstensils,searchBarre)
{
    document.querySelector(".page_section").innerHTML=""
    const input = searchBarre.value
    tagIngredients.innerHTML=""
    tagAppareil.innerHTML=""
    tagsUstensils.innerHTML=""
    pageSection.innerHTML=""
    let resultatFiltre =menuData.recipes.filter(menu=>(menu.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())||menu.appliance.toLocaleLowerCase().includes(input.toLocaleLowerCase())||menu.description.toLocaleLowerCase().includes(input.toLocaleLowerCase())||menu.ingredients[0].ingredient.toLocaleLowerCase().includes(input.toLocaleLowerCase())||menu.ingredients[1].ingredient.toLocaleLowerCase().includes(input.toLocaleLowerCase())))
    
    this.menufiltre=resultatFiltre
    this.menufiltreTags = resultatFiltre
    this.retourfiltre = actualisationSelectBox(this.menufiltre)

    rechargeTags(retourfiltre,tagIngredients,tagAppareil,tagsUstensils)
    
    reaffichage()
}
function triageTags(type,value,menuData,tagAppareil,filtersAppareils,filterAppareil,tagIngredients,FiltersIngredients,filterIngredient,tagsUstensils,filterUstensil,filtersUstensils)
{   
    setTimeout(()=>{
    const searchBarre = document.getElementById('search_value')
    let tagIngredientValid = document.querySelectorAll('.tagIngredients .tagText')
    let tagTabIngredient = []
    for (let i = 0 ; i< tagIngredientValid.length;i++)
    {
        tagTabIngredient.push(tagIngredientValid[i].innerHTML)
    }
    console.log(tagTabIngredient)
    if (incrementation===0)
        {
            tagAppareil.innerHTML=""
            tagIngredients.innerHTML=""
            tagsUstensils.innerHTML=""
            if (searchBarre.value.length >=3)
            {
                
                if (type === "appliance")
                {
                    this.pageSection.innerHTML=""
                    let resultatFiltreAppareils = this.menufiltre.filter(menu=>(menu.appliance.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
                    this.menufiltre=resultatFiltreAppareils
                    newFilterAppareils=resultatFiltreAppareils
                    this.menufiltre=resultatFiltreAppareils
                }
    
                if (type === "ingredients")
                {
                    console.log(this.menufiltre)
                    this.pageSection.innerHTML=""
                    let resultatFiltreIngredients =this.menufiltre.filter(menu=>{
                    
                        for(let i in menu.ingredients)
                        {
                            if (menu.ingredients[i].ingredient.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
                            {
                                return true
                            }
                        }
                        return false
                    })
                    newFilterIngredients=resultatFiltreIngredients
                    this.menufiltre=resultatFiltreIngredients
                }
                if (type === "ustensils")
                {
                    this.pageSection.innerHTML=""
                    let resultatFiltreUstensils =this.menufiltre.filter(menu=>{

                        for(let i in menu.ustensils)
                        {
                            if(menu.ustensils[i].toLocaleLowerCase().includes(value.toLocaleLowerCase()))
                            {
                                return true
                            }
                        }
                        return false
                    })
                    this.menufiltre=resultatFiltreUstensils
                    newFilterUstensils=resultatFiltreUstensils
                }
            }
            else{
                if (type === "appliance")
                {
    
                    this.pageSection.innerHTML=""
                    let resultatFiltreAppareils =menuData.filter(menu=>(menu.appliance.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
                    this.menufiltre=resultatFiltreAppareils
                    newFilterAppareils=resultatFiltreAppareils
                    this.menufiltre=resultatFiltreAppareils
                }
    
                if (type === "ingredients")
                {
                    
                    this.pageSection.innerHTML=""
                    let resultatFiltreIngredients =menuData.filter(menu=>{
                    
                        for(let i in menu.ingredients)
                        {
                            if (menu.ingredients[i].ingredient.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
                            {
                                return true
                            }
                        }
                        return false
                        
                        //menu.ingredients[0].ingredient.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || menu.ingredients[1].ingredient.toLocaleLowerCase().includes(value.toLocaleLowerCase())
                    })
                    newFilterIngredients=resultatFiltreIngredients
                    this.menufiltre=resultatFiltreIngredients
                }
                if (type === "ustensils")
                {
                    this.pageSection.innerHTML=""
                    let resultatFiltreUstensils =menuData.filter(menu=>{

                        for(let i in menu.ustensils)
                        {
                            if(menu.ustensils[i].toLocaleLowerCase().includes(value.toLocaleLowerCase()))
                            {
                                return true
                            }
                            
                        }
                        return false
                    })
                    this.menufiltre=resultatFiltreUstensils
                    newFilterUstensils=resultatFiltreUstensils
                }
            }
           
            incrementation++
        }
        else if (incrementation===1)
        {
            tagAppareil.innerHTML=""
            tagIngredients.innerHTML=""
            tagsUstensils.innerHTML=""
            if (type === "appliance")
            {
                this.pageSection.innerHTML=""
                let resultatFiltreAppareils =  this.menufiltre.filter(menu=>(menu.appliance.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
                this.menufiltre=resultatFiltreAppareils
                newFilterAppareils=resultatFiltreAppareils
                this.menufiltre=resultatFiltreAppareils
            }

            if (type === "ingredients")
            {
                
                this.pageSection.innerHTML=""
                let resultatFiltreIngredients =this.menufiltre.filter(menu=>{
                
                    for(let i in menu.ingredients)
                    {
                        if (menu.ingredients[i].ingredient.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
                        {
                            return true
                        }
                    }
                    return false
                    
                    //menu.ingredients[0].ingredient.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || menu.ingredients[1].ingredient.toLocaleLowerCase().includes(value.toLocaleLowerCase())
                })
                newFilterIngredients=resultatFiltreIngredients
                this.menufiltre=resultatFiltreIngredients
            }
            if (type === "ustensils")
            {
                this.pageSection.innerHTML=""
                let resultatFiltreUstensils =this.menufiltre.filter(menu=>{

                    for(let i in menu.ustensils)
                    {
                        if(menu.ustensils[i].toLocaleLowerCase().includes(value.toLocaleLowerCase()))
                        {
                            return true
                        }
                        return false
                    }
                })
                this.menufiltre=resultatFiltreUstensils
                newFilterUstensils=resultatFiltreUstensils
            }
        }
        
            let retourfiltre = actualisationSelectBox(this.menufiltre)
            rechargeTags(retourfiltre,tagIngredients,tagAppareil,tagsUstensils)
       
        reaffichage()
    },100)} 
//triage des Appareils

function triageAppareils(menuData,tagAppareil,filtersAppareils,filterAppareil,searchAppareils)
{
    const searchBarre = document.getElementById('search_value')
    if (searchBarre.value.length<3)
    {
        tagAppareil.innerHTML=""
        const valueAppareils = searchAppareils.value
        let resultatFiltreAppareils = menuData.recipes.filter(menu=>(menu.appliance.toLocaleLowerCase().includes(valueAppareils.toLocaleLowerCase())))
        this.menufiltre=resultatFiltreAppareils
        let retourappareil = actualisationSelectBox(this.menufiltre)
        tabAppareils = retourappareil.tabAppareils
        filtersAppareils= new AppareilsTags(tabAppareils)
        filterAppareil = filtersAppareils.rendertags()
        tagAppareil.appendChild(filterAppareil)
    }
    else {
        console.log(this.menufiltre)
        tagAppareil.innerHTML=""
        const valueAppareils = searchAppareils.value
        let resultatFiltreAppareils = this.menufiltreTags.filter(menu=>(menu.appliance.toLocaleLowerCase().includes(valueAppareils.toLocaleLowerCase())))
        this.menufiltre=resultatFiltreAppareils
        let retourappareil = actualisationSelectBox(this.menufiltre)
        tabAppareils = retourappareil.tabAppareils
        filtersAppareils= new AppareilsTags(tabAppareils)
        filterAppareil = filtersAppareils.rendertags()
        tagAppareil.appendChild(filterAppareil)
    }

}
//triage des Ingredients

function triageIngredients(menuData,tagIngredients,FiltersIngredients,filterIngredient,searchIngredients)
{
    const searchBarre = document.getElementById('search_value')
    if (searchBarre.value.length<3)
    {
        tagIngredients.innerHTML=""
        const valueIngredients = searchIngredients.value
        let resultatFilterIngredients = menuData.recipes.filter(menu=>{
            for(let i in menu.ingredients)
            {
                if (menu.ingredients[i].ingredient.toLocaleLowerCase().includes(valueIngredients.toLocaleLowerCase()))
                {
                    return true
                }
            }
            return false
            //menu.ingredients[0].ingredient.toLocaleLowerCase().includes(valueIngredients.toLocaleLowerCase())))
        })
            
        this.menufiltre=resultatFilterIngredients
        let retourIngredient = actualisationSelectBox(this.menufiltre)
        tabIngredients = retourIngredient.tabIngredients
        FiltersIngredients = new IngredientsTags(tabIngredients)
        filterIngredient = FiltersIngredients.rendertags()
        tagIngredients.appendChild(filterIngredient)
    }
    else
    {
            tagIngredients.innerHTML=""
            const valueIngredients = searchIngredients.value
            let resultatFilterIngredients = this.menufiltreTags.filter(menu=>{
                for(let i in menu.ingredients)
                {
                    if (menu.ingredients[i].ingredient.toLocaleLowerCase().includes(valueIngredients.toLocaleLowerCase()))
                    {
                        return true
                    }
                }
                return false
                //menu.ingredients[0].ingredient.toLocaleLowerCase().includes(valueIngredients.toLocaleLowerCase())))
            })
                
            this.menufiltre=resultatFilterIngredients
            let retourIngredient = actualisationSelectBox(this.menufiltre)
            tabIngredients = retourIngredient.tabIngredients
            FiltersIngredients = new IngredientsTags(tabIngredients)
            filterIngredient = FiltersIngredients.rendertags()
            tagIngredients.appendChild(filterIngredient)
    }
}

//triage Ustensils
function  triageUstensils(menuData,tagsUstensils,filtersUstensils,filterUstensil,searchUstensils)
{
    const searchBarre = document.getElementById('search_value')
    if (searchBarre.value.length<3)
    {
        tagsUstensils.innerHTML=""
        const valueUstensils = searchUstensils.value
        let resultatFilterUstensils = menuData.recipes.filter(menu=>{
        for(let i in menu.ustensils)
        {
            if (menu.ustensils[i].toLocaleLowerCase().includes(valueUstensils.toLocaleLowerCase()))
            {
                return true
            }
        }
        return false
        })
                
                //(menu.ustensils[0].toLocaleLowerCase().includes(valueUstensils.toLocaleLowerCase())))
        this.menufiltre=resultatFilterUstensils
        let retourUstensils = actualisationSelectBox(this.menufiltre)
        tabUstensiles = retourUstensils.tabUstensiles
        filtersUstensils = new UstensilsTags(tabUstensiles)
        filterUstensil = filtersUstensils.rendertags()
        tagsUstensils.appendChild(filterUstensil)
    }
    else{
        tagsUstensils.innerHTML=""
        const valueUstensils = searchUstensils.value
        let resultatFilterUstensils = this.menufiltreTags.filter(menu=>{
        for(let i in menu.ustensils)
        {
            if (menu.ustensils[i].toLocaleLowerCase().includes(valueUstensils.toLocaleLowerCase()))
            {
                return true
            }
        }
        return false
        })
                
                //(menu.ustensils[0].toLocaleLowerCase().includes(valueUstensils.toLocaleLowerCase())))
        this.menufiltre=resultatFilterUstensils
        let retourUstensils = actualisationSelectBox(this.menufiltre)
        tabUstensiles = retourUstensils.tabUstensiles
        filtersUstensils = new UstensilsTags(tabUstensiles)
        filterUstensil = filtersUstensils.rendertags()
        tagsUstensils.appendChild(filterUstensil)
    }

}

//triage avec les tags
this.filtreAppareil ={}
this.filtreIngredients ={}
this.filtreUstensils={}
let newFilterAppareils
let newFilterUstensils
let newFilterIngredients
let incrementation = 0

function reaffichage()
{
    this.pageSection = document.querySelector(".page_section");
    this.menufiltre.forEach((menu) => {
        //affichage des card menu
        const menuModel = new Menus(menu);    
        const userCardDOM = menuModel.render();
        pageSection.appendChild(userCardDOM);
    });
}

function allUstensils(ustensils)
{
    for(let j in ustensils)
    {
        tabUstensiles[ustensils[j]] = ustensils[j]
        return (tabUstensiles[ustensils[j]])
    }
    
}

function rechargeTags(retourfiltre,tagIngredients,tagAppareil,tagsUstensils)
{
    tabIngredients = retourfiltre.tabIngredients
    tabAppareils = retourfiltre.tabAppareils
    tabUstensiles = retourfiltre.tabUstensiles

    FiltersIngredients = new IngredientsTags(tabIngredients)
    filterIngredient=FiltersIngredients.rendertags()
    tagIngredients.appendChild(filterIngredient)
    
    filtersAppareils= new AppareilsTags(tabAppareils)
    filterAppareil = filtersAppareils.rendertags()
    tagAppareil.appendChild(filterAppareil)

    filtersUstensils= new UstensilsTags(tabUstensiles)
    filterUstensil = filtersUstensils.rendertags()
    tagsUstensils.appendChild(filterUstensil)
}


