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
    let retourfiltre = actualisationSelectBox(this.menufiltre)
    reaffichage()
    
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

//triage des Appareils

function triageAppareils(menuData,tagAppareil,filtersAppareils,filterAppareil,searchAppareils)
{
    tagAppareil.innerHTML=""
    const valueAppareils = searchAppareils.value
    let resultatFiltreAppareils =menuData.recipes.filter(menu=>(menu.appliance.toLocaleLowerCase().includes(valueAppareils.toLocaleLowerCase())))
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
    let resultatFilterIngredients = menuData.recipes.filter(menu=>(menu.ingredients[0].ingredient.toLocaleLowerCase().includes(valueIngredients.toLocaleLowerCase())))
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

function triageTags(type,value,menuData,tagAppareil,filtersAppareils,filterAppareil,tagIngredients,filtersAppareils,filterIngredient)
{

        if (type === "appliance")
        {
            this.pageSection.innerHTML=""
            let resultatFiltreAppareils =menuData.filter(menu=>(menu.appliance.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
            this.menufiltre=resultatFiltreAppareils
            let retourfiltre = actualisationSelectBox(this.menufiltre)
            reaffichage()
        }
        if (type === "ingredients")
        {
            this.pageSection.innerHTML=""
            let resultatFiltreIngredients =menuData.filter(menu=>(menu.ingredients[0].ingredient.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || menu.ingredients[1].ingredient.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
            this.menufiltre=resultatFiltreIngredients
            let retourfiltre = actualisationSelectBox(this.menufiltre)
            reaffichage()
        }
        if (type === "ustensils")
        {
            this.pageSection.innerHTML=""
            let resultatFiltreUstensils =menuData.filter(menu=>(menu.ustensils[0].toLocaleLowerCase().includes(value.toLocaleLowerCase())))
            this.menufiltre=resultatFiltreUstensils
            let retourfiltre = actualisationSelectBox(this.menufiltre)
            reaffichage()
        }



}
function reaffichage()
{
    this.pageSection = document.querySelector(".page_section");
    this.menufiltre.forEach((menu) => {
        //affichage des card menu
        console.log(menu)
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