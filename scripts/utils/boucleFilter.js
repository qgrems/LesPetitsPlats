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

    let datas = menuData.recipes 
    let datasName
    let datasAppliance
    let datasIngredients
    let datasdescription
    let datasIngredient
    let newDatas =[]
    for(let i in datas)
        {
            datasName=datas[i].name
            datasAppliance=datas[i].appliance
            datasIngredients = datas[i].ingredients
            datasdescription = datas[i].description
            if (datasName.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
                {
                    datasName = datas[i].name
                    newDatas.push(datas[i])
                }
            if (datasAppliance.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
                {
                    datasAppliance = datas[i].appliance
                    newDatas.push(datas[i])
                }
            for(let j in datasIngredients)
                {
                    datasIngredient = datasIngredients[j].ingredient
                    if(datasIngredient.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
                        {
                            newDatas.push(datas[i])
                        }
                }
            if(datasdescription.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
                {
                    newDatas.push(datas[i])
                }
        }
    this.menufiltre=newDatas
    this.retourfiltre = actualisationSelectBox(newDatas)
    rechargeTags(retourfiltre,tagIngredients,tagAppareil,tagsUstensils)
    reaffichage()
}

//triage des Appareils

function triageAppareils(menuData,tagAppareil,filtersAppareils,filterAppareil,searchAppareils)
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
//triage des Ingredients

function triageIngredients(menuData,tagIngredients,FiltersIngredients,filterIngredient,searchIngredients)
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
    })
        
    this.menufiltre=resultatFilterIngredients
    let retourIngredient = actualisationSelectBox(this.menufiltre)
    tabIngredients = retourIngredient.tabIngredients
    FiltersIngredients = new IngredientsTags(tabIngredients)
    filterIngredient = FiltersIngredients.rendertags()
    tagIngredients.appendChild(filterIngredient)
}

//triage Ustensils
function  triageUstensils(menuData,tagsUstensils,filtersUstensils,filterUstensil,searchUstensils)
{
    tagsUstensils.innerHTML=""
    const valueUstensils = searchUstensils.value
    let resultatFilterUstensils = menuData.recipes.filter(menu=>(menu.ustensils[0].toLocaleLowerCase().includes(valueUstensils.toLocaleLowerCase())))
    this.menufiltre=resultatFilterUstensils
    let retourUstensils = actualisationSelectBox(this.menufiltre)
    tabUstensiles = retourUstensils.tabUstensiles
    tagsUstensils = document.querySelector(".modalFilterUstensiles")
    filtersUstensils = new UstensilsTags(tabUstensiles)
    filterUstensil = filtersUstensils.rendertags()
    tagsUstensils.appendChild(filterUstensil)
}

//triage avec les tags
this.filtreAppareil ={}
this.filtreIngredients ={}
this.filtreUstensils={}
function triageTags(type,value,menuData,tagAppareil,filtersAppareils,filterAppareil,tagIngredients,FiltersIngredients,filterIngredient,tagsUstensils,filterUstensil,filtersUstensils)
{
        if (type === "appliance")
        {
            tagIngredients.innerHTML=""
            tagAppareil.innerHTML=""
            tagsUstensils.innerHTML=""
            this.pageSection.innerHTML=""
            let resultatFiltreAppareils =menuData.filter(menu=>(menu.appliance.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
            this.menufiltre=resultatFiltreAppareils
        }
        if (type === "ingredients")
        {
            tagIngredients.innerHTML=""
            tagAppareil.innerHTML=""
            tagsUstensils.innerHTML=""
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
            })
            this.menufiltre=resultatFiltreIngredients
        }
        if (type === "ustensils")
        {
            tagIngredients.innerHTML=""
            tagAppareil.innerHTML=""
            tagsUstensils.innerHTML=""
            this.pageSection.innerHTML=""
            let resultatFiltreUstensils =menuData.filter(menu=>(menu.ustensils[0].toLocaleLowerCase().includes(value.toLocaleLowerCase())))
            this.menufiltre=resultatFiltreUstensils
        }
        console.log(this.menufiltre)
        let retourfiltre = actualisationSelectBox(this.menufiltre)
        reaffichage()
}
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


