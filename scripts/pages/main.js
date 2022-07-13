class App
{

    constructor()
    {
        this.pageSection = document.querySelector(".page_section");
        this.search = document.querySelector("#containerSearch");
        this.modalFilterAppliance= document.querySelector('card_filer');
        this.pageApi = new MenuApi ('./data/menu.json');
    }
    
    async main()
    {
        const menuData = await this.pageApi.getMenu()

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

        this.menufiltre = [...menuData.recipes]
        let retourfiltre = actualisationSelectBox(this.menufiltre)
        tabIngredients = retourfiltre.tabIngredients
        tabAppareils = retourfiltre.tabAppareils
        tabUstensiles = retourfiltre.tabUstensiles
        let tableauAppareil =[]
        tableauAppareil.push(tabAppareils)
        let filters
        let filter
        filters = new Search()
        filter = filters.renderSearch()
        this.search.appendChild(filter)
        this.renderMenu()
        this.tagIngredients = document.querySelector(".modalFilterIngredients")
        FiltersIngredients = new IngredientsTags(tabIngredients)
        filterIngredient=FiltersIngredients.rendertags()
        this.tagIngredients.appendChild(filterIngredient)

        this.tagAppareil = document.querySelector(".modalFilterAppareils")
        this.filtersAppareils= new AppareilsTags(tabAppareils, tabIndex(tabAppareils))
        this.filterAppareil = this.filtersAppareils.rendertags()
        this.tagAppareil.appendChild(this.filterAppareil)

        this.tagsUstensils = document.querySelector(".modalFilterUstensiles")
        filtersUstensils= new UstensilsTags(tabUstensiles)
        filterUstensil = filtersUstensils.rendertags()
        this.tagsUstensils.appendChild(filterUstensil)
       

        const searchIngredients = document.getElementById('ingredients')
        const searchAppareils = document.getElementById('appareils') ;
        const searchUstensils = document.getElementById('ustensiles')

        const searchBarre = document.getElementById('search_value')
        searchBarre.addEventListener('keyup', () =>{
            if(search_value.value.length >=3)
            {
                triageResearch(menuData,this.pageSection,this.tagIngredients,this.tagAppareil,this.tagsUstensils,searchBarre)
                searchAppareils.addEventListener('keyup', () =>{
                    if(searchAppareils.value.length>=3)
                    {
                        triageAppareils(menuData,this.tagAppareil,this.filtersAppareils,this.filterAppareil,searchAppareils)
                    }
                })
                searchIngredients.addEventListener('keyup',() =>{
                    if(searchIngredients.value.length>=3)
                    { 
                        triageIngredients(menuData,this.tagIngredients,FiltersIngredients,filterIngredient,searchIngredients)
                    }
                })
                // tri a l'écrit pour les tags des Ustensiles
                
                searchUstensils.addEventListener('keyup',() =>{
                    if(searchUstensils.value.length>=3)
                    {
                        triageUstensils(menuData,this.tagsUstensils,filtersUstensils,filterUstensil,searchUstensils)
                    }
                })
            }

            else 
            {
                triageAppareils(menuData,this.tagAppareil,this.filtersAppareils,this.filterAppareil,searchAppareils)
                triageIngredients(menuData,this.tagIngredients,FiltersIngredients,filterIngredient,searchIngredients)
                triageUstensils(menuData,this.tagsUstensils,filtersUstensils,filterUstensil,searchUstensils)
                document.querySelector(".page_section").innerHTML=""
                this.menufiltre = [...menuData.recipes]
                this.renderMenu();
            }
        })
           
        // tri a l'écrit pour les tags des appareils
       
        searchAppareils.addEventListener('keyup', () =>{
            if(searchAppareils.value.length>=3)
            {
                triageAppareils(menuData,this.tagAppareil,this.filtersAppareils,this.filterAppareil,searchAppareils)
            }
            if (searchAppareils.value.length<3)
            {
                triageAppareils(menuData,this.tagAppareil,this.filtersAppareils,this.filterAppareil,searchAppareils)
            }
        })
        
        // tri a l'écrit pour les tags des ingredients
       
        searchIngredients.addEventListener('keyup',() =>{
            if(searchIngredients.value.length>=3)
            { 
                triageIngredients(menuData,this.tagIngredients,FiltersIngredients,filterIngredient,searchIngredients)
            }
            if(searchIngredients.value.length<3)
            { 
                triageIngredients(menuData,this.tagIngredients,FiltersIngredients,filterIngredient,searchIngredients)
            }
        })
        // tri a l'écrit pour les tags des Ustensiles
        
        searchUstensils.addEventListener('keyup',() =>{
            if(searchUstensils.value.length>=3)
            {
                triageUstensils(menuData,this.tagsUstensils,filtersUstensils,filterUstensil,searchUstensils)
            }
            if(searchUstensils.value.length<3)
            {
                triageUstensils(menuData,this.tagsUstensils,filtersUstensils,filterUstensil,searchUstensils)
            }
        })
    }
    
    renderMenu()
    {
        let filters
        let filter
        
        this.menufiltre.forEach((menu) => {
            //affichage des card menu
            const menuModel = new Menus(menu);    
            const userCardDOM = menuModel.render();
            this.pageSection.appendChild(userCardDOM);
        });
    }
    ajouFiltreActif(type,value,index)
    {
        console.log(index)
        triageTags(type,value,this.menufiltre,this.tagAppareil,this.filtersAppareils,this.filterAppareil,this.tagIngredients,this.FiltersIngredients,this.filterIngredient,this.tagsUstensils,this.filterUstensil,this.filtersUstensils)
        let tag
        let tagappliance
        let tagUstensil
        let tagActif
        this.tags= document.querySelector("#tags");
        this.tagsAppliance = document.querySelector("#tagsAppliance")
        this.tagsUstensile = document.querySelector("#tagUstensil")
        if (type ==="ingredients")
        {
            tag = new Tags(type,value,index)
            tagActif = tag.renderTags()
            this.tags.appendChild(tagActif)
        }
        else if (type ==="appliance")
        {
            tagappliance = new TagsAppliance(type,value,index)
            tagActif = tagappliance.renderTagsAppliance()
            this.tagsAppliance.appendChild(tagActif)
        }
        else if (type ==="ustensils")
        {
            tagUstensil = new TagsUstensils(type,value,index)
            tagActif = tagUstensil.renderTagsUstensils()
            this.tagsUstensile.appendChild(tagActif)
        }
    }
}
const app = new App()
app.main();